import { IsString, IsNotEmpty } from 'class-validator';

export class User {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
