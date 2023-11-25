import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entity/user.entity';
import { BcryptService } from './services/bcrypt.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './services/jwt.service';
import { config } from 'dotenv';
import { JwtStrategy } from './services/jwt.strategy';
config();
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, BcryptService, JwtAuthService, JwtStrategy],
})
export class UserModule {}
