import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { User } from '../users/user.entity';
import { BookDto } from './dto/book.dto';
import { UserDto, UserIdDto } from '../users/dto/user.dto';
import { type } from 'os';
import { find } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(User)
    private userRepository: Repository<User>,

  ) {
  }

  createBook(dto: BookDto): Promise<Book>{
    // если вводится пустая строка
    if (!dto.name){
      throw new HttpException('Пустое имя не поддерживается', HttpStatus.I_AM_A_TEAPOT)
    }
    //повторное имя
    const book = this.booksRepository.findOne(dto.name)
    if (book) {
      throw new HttpException('Книга с таким имененм существует', HttpStatus.BAD_REQUEST);
    }
    const newBook = new Book()
    newBook.Name = dto.name
    return this.booksRepository.save(newBook)
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async AddBook(bookId: string, id: string): Promise<Book>{
    //проверка на наличие юзера
    const user = await this.userRepository.findOne(id)
    if (!user){
      throw new HttpException('Пользователь с таким id не существует', HttpStatus.BAD_REQUEST);
    }
    //проверка на абонимент
    if (!user.withAbonnement){
      throw new HttpException('Пользователь без абонимента ', HttpStatus.FORBIDDEN);
    }
    const usersbooks = await this.booksRepository.findAndCount({ where: {user}})
    // проверка на количество книг на руках пользователя
    if (usersbooks[1] >= 5){
      throw new HttpException('Пользователь уже взял 5 книг', HttpStatus.FORBIDDEN);
    }
    const book = await this.booksRepository.findOne(bookId, {relations: ['user']})
    // проверка, взята ли книга уже
    if (book.user){
      throw new HttpException('Книга уже взята', HttpStatus.FORBIDDEN);
    }
    book.user = user
    return this.booksRepository.save(book)
  }


  async returnBook(bookId: string): Promise<Book>{
    const book = await this.booksRepository.findOne(bookId, {relations: ['user']})
    if (!book){
      throw new HttpException('Книга с данным id не существует', HttpStatus.FORBIDDEN);
    }
    book.user = null
    return this.booksRepository.save(book)
  }
}