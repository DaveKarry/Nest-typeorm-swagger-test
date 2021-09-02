import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({example: 'Вася Пупкин', description: "Имя пользователя"})
  @IsString()
  @IsDefined()
  readonly name: string
}

export class UserIdDto {
  @ApiProperty({example: '1', description: "Идентефикатор пользователя"})
  readonly id: string

  @ApiProperty({example: 'Вася Пупкин', description: "Имя пользователя"})
  readonly name: string
}


