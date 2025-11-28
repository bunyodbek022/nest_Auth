import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegister } from './dto/register.dto';
import { LoginDto } from './dto/logim.dto';
import { AuthGuard } from 'src/guards/auth.guard.service';
import { RoleGuard } from 'src/guards/role.guard.service';
import { Roles } from 'src/guards/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() payload: AuthRegister) {
    return this.authService.register(payload);
  }

  @Post('login')
  login(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }

  @Get('dashboard')
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin', 'student')
  getDashboard() {
    return { message: 'Welocome' };
  }


}
