import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  age: number;
}
