import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({example: 'Вася Пупкин', description: "Имя пользователя"})
  readonly name: string
}

export class UserIdDto {
  @ApiProperty({example: '1', description: "Идентефикатор пользователя"})
  readonly id: string

  @ApiProperty({example: 'Вася Пупкин', description: "Имя пользователя"})
  readonly name: string
}


