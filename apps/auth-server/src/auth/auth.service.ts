import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.model';
import { JwtService } from '@nestjs/jwt';

type result = {
  fullName: string;
  id: string;
  email: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}
  async signIn(user: User): Promise<{ access_token: string }> {
    const checkedUser = await this.usersService.findOne(user.id);
    if (checkedUser.password !== user.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, fullName: user.fullName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
