import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class BookDto {
  @ApiProperty({example: 'Приключения Шерлока Холмса', description: "Название книги"})
  @IsString()
  @IsDefined()
  readonly name: string
}


