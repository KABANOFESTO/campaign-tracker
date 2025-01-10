import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string; // Hashed password

  @Prop({ default: 'influencer' })
  role: string; // 'influencer' or 'admin'
}

export const UserSchema = SchemaFactory.createForClass(User);
