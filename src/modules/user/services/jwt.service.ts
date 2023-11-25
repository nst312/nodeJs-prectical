import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entity/user.entity';

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signPayload(payload: Partial<User>): Promise<string> {
    return this.jwtService.sign({ ...payload });
  }

  async verifyToken(token: string): Promise<User> {
    return await this.jwtService.verify(token);
  }
}
