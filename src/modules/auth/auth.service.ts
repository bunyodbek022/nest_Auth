import { ConflictException, Injectable } from '@nestjs/common';
import { AuthRegister } from './dto/register.dto';
import { MyErrorExeption } from 'src/middleware/MyErrors';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/logim.dto';

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
    const newUser = {
      id: newId,
      ...payload
    };

    this.arr.push(newUser);

    return this.generateToken(newUser.id, newUser.phoneNumber);
  }

  async login(payload: LoginDto) {
    
  }
}
