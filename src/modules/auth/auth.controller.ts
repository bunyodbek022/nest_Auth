import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authRegister } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  register(@Body() payload: authRegister) {
    return this.authService.register(payload);
  }
}
