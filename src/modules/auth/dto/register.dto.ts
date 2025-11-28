import { IsNotEmpty, IsString } from 'class-validator';

enum roles {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT"
}
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

  @IsString()
  @IsNotEmpty()
  role: roles;
}