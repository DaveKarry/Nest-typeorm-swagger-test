import { Book } from 'src/books/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity( {name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Name: string;

  @Column({ default: false })
  withAbonnement: boolean;

  // зависимость одна книга на одного юзера, один юзер - много книг
  @OneToMany(type => Book, book => book.user)
  books: Book[];

}