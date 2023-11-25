import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    try {
      const requiredRoles = this.reflector.get<string[]>(
        'roles',
        context.getHandler(),
      );
      if (!requiredRoles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const userRoles = request.user.role;
      return requiredRoles.some((role) => userRoles.includes(role));
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
