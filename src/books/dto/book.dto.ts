import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty({example: 'Приключения Шерлока Холмса', description: "Название книги"})
  readonly name: string
}


