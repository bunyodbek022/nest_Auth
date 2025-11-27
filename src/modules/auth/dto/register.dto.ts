import { IsNotEmpty, IsString } from 'class-validator';

export class AuthRegister {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
