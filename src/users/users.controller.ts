import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';



@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status:200, type: User})
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() userDto: UserDto){
    return this.usersService.createUser(userDto)
  }

  @ApiOperation({summary: 'Получить всех пользователей'})
  @ApiResponse({status:200, type: [User]})
  @Get()
  getAll(){
    return this.usersService.findAll()
  }

  @ApiOperation({summary: 'Получить одного пользователя'})
  @ApiResponse({status:200, type: User})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({summary: 'Изменить данные пользователя'})
  @ApiResponse({status:200, type: User})
  @Patch(':id/update')
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    console.log(userDto)
    return this.usersService.update(id, userDto);
  }

  @ApiOperation({summary: 'Изменить данные пользователя'})
  @ApiResponse({status:200, type: User})
  @Patch(':id/updateAbonnement')
  updateAbonnement(@Param('id') id: string) {
    return this.usersService.updateAbonnement(id);
  }

  @ApiOperation({summary: 'Удалить пользователя'})
  @Delete(':id/delete')
  delete(@Param('id') id: string){
    return this.usersService.delete(id)
  }






}
