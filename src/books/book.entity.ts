import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity( {name: 'books'})
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  // зависимость одна книга на одного юзера, один юзер - много книг
  @ManyToOne(type => User, user => user.books)
  @JoinColumn({name:"user_id"})
  user: User;
}