import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createUser(user: User): Promise<User>{
    return this.usersRepository.save(user)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id, { relations: ['books'] })
  }

  async update( id: string, dto: UserDto ) :Promise<User>{
    const loadeduser = await this.usersRepository.findOneOrFail(id)
    loadeduser.Name = dto.name
    return this.usersRepository.save(loadeduser)

  }

  async updateAbonnement( id: string ) :Promise<User>{
    const loadeduser = await this.usersRepository.findOneOrFail(id)
    loadeduser.withAbonnement = !loadeduser.withAbonnement
    return this.usersRepository.save(loadeduser)
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}