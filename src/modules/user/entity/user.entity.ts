import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/core/common/enum/role.enum';

@Schema()
export class User extends Document {
  @Prop()
    name: string;

  @Prop({ unique: true })
    email: string;

  @Prop()
    password: string;

  @Prop({ enum: Role })
    role: Role;

  @Prop()
    isLogin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
