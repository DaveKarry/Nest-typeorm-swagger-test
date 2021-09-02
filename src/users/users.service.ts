import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  createUser(userDto: UserDto): Promise<User>{
    if (!userDto.name){
      throw new HttpException('Пустое имя не поддерживается', HttpStatus.I_AM_A_TEAPOT)
    }
    const user = this.usersRepository.findOne(userDto.name)
    if (user) {
      throw new HttpException('Пользователь с таким имененм существует', HttpStatus.BAD_REQUEST);
    }
    const newUser = new User()
    newUser.Name = userDto.name
    return this.usersRepository.save(newUser)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id, { relations: ['books'] })
    if (!user){
      throw new HttpException('Пользователь с таким id не существует', HttpStatus.BAD_REQUEST);
    }
    return user
  }

  async update( id: string, dto: UserDto ) :Promise<User>{
    const user = await this.usersRepository.findOne(id)
    if (!user){
      throw new HttpException('Пользователь с таким id не существует', HttpStatus.BAD_REQUEST);
    }
    user.Name = dto.name
    return this.usersRepository.save(user)

  }

  async updateAbonnement( id: string ) :Promise<User>{
    const loadeduser = await this.usersRepository.findOneOrFail(id)
    loadeduser.withAbonnement = !loadeduser.withAbonnement
    return this.usersRepository.save(loadeduser)
  }

  async delete(id: string): Promise<any> {
    const user = await this.usersRepository.findOne(id)
    if (!user){
      throw new HttpException('Пользователь с таким id не существует', HttpStatus.BAD_REQUEST);
    }
    await this.usersRepository.delete(id);
    return new HttpException('Удалено', HttpStatus.OK);
  }

}