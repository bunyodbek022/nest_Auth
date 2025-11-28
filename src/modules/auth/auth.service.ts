import { ConflictException, Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { AuthRegister } from './dto/register.dto';
import { MyErrorExeption } from 'src/middleware/MyErrors';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/logim.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) { }
  private generateToken(id: number, phoneNumber: string) {
    return {
      success: true,
      accessToken: this.jwt.sign({ id, phoneNumber })
    }
  }
  private arr: any[] = [];
  async register(payload: AuthRegister) {
    if (!payload) {
      throw new MyErrorExeption('Request bosh', 404);
    }
    const existUser = await this.arr.find((obj) => obj.phoneNumber = payload.phoneNumber);
    if (existUser) throw new ConflictException()
    const newId = this.arr.length ? this.arr[this.arr.length - 1].id + 1 : 1;
    payload.password = await bcrypt.hash(payload.password, 10);
    const newUser = {
      id: newId,
      ...payload
    };

    this.arr.push(newUser);

    return this.generateToken(newUser.id, newUser.phoneNumber);
  }

  async login(payload: LoginDto) {
    const existUser = await this.arr.find((obj) => obj.phoneNumber = payload.phoneNumber);
    if (!existUser) throw new NotFoundException("User not register");

    const correctPassword = await bcrypt.compare(payload.password, existUser.password);
    if (!correctPassword) throw new NotFoundException("User phone or password not fount");
    const { password, ...rest } = existUser
    return { success: true, message: 'User login successfully', data: rest};
    
  }
}
