import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { User } from '../users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Book, User])

  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}