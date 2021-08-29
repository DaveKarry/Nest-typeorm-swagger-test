import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { User } from '../users/user.entity';
import { BookDto } from './dto/book.dto';
import { UserIdDto } from '../users/dto/user.dto';
import { type } from 'os';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {
  }

  createBook(dto: BookDto): Promise<Book>{
    const book = new Book()
    book.Name = dto.name
    return this.booksRepository.save(book)
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async AddBook(bookId: string, user: User): Promise<Book>{
    //проверка на абонимент
    if (user.withAbonnement){
      const usersbooks = await this.booksRepository.findAndCount({ where: {user}})
      // проверка на количество книг на руках пользователя
      if (usersbooks[1] < 5){
        const book = await this.booksRepository.findOne(bookId, {relations: ['user']})
        // проверка, взята ли книга уже
        if (book.user){
          throw new HttpException('Книга уже взята', HttpStatus.FORBIDDEN);
        }
        else{
          book.user = user
          return this.booksRepository.save(book)
        }
      }
      else throw new HttpException('Вы не можете брать еще книги', HttpStatus.FORBIDDEN);
    }
    else{
      throw new HttpException('Вы не можете брать книги без абонимента', HttpStatus.FORBIDDEN);
    }
  }


  async returnBook(bookId: string): Promise<Book>{
    const book = await this.booksRepository.findOne(bookId, {relations: ['user']})
    book.user = null
    return this.booksRepository.save(book)
  }
}