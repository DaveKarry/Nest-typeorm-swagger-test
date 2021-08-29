import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { User } from '../users/user.entity';
import { UserIdDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';



@ApiTags('Книги')
@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {
  }

  @ApiOperation({ summary: 'Создание книги' })
  @ApiResponse({ status: 200, type: Book })
  @Post()
  create(@Body() bookDto: BookDto) {
    return this.booksService.createBook(bookDto)
  }

  @ApiOperation({ summary: 'Получить все книги' })
  @ApiResponse({status:200, type: [Book]})
  @Get()
  getAll() {
    return this.booksService.findAll()
  }

  @ApiOperation({ summary: 'Записать книгу за пользователем' })
  @ApiResponse({ status: 200, type: Book })
  @Patch('/:bookId/rent')
  async AddBook(
    @Param('bookId') bookId: string,
    @Body() user: User
  ) {
    return this.booksService.AddBook(bookId, user)
  }

  @ApiOperation({ summary: 'Вернуть книгу' })
  @ApiResponse({ status: 200, type: Book })
  @Patch('/:bookId/back')
  async ReturnBook(
    @Param('bookId') bookId: string
  ){
    return this.booksService.returnBook(bookId)
  }
}