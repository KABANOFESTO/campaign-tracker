import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: string; // e.g., 'ongoing', 'completed'

  @Prop({ required: true })
  deadline: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
