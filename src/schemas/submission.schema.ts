import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Submission extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
  campaign: Types.ObjectId;

  @Prop({ required: true })
  influencerId: string;

  @Prop({ required: true })
  contentLink: string; // Link to TikTok post, etc.

  @Prop({ required: true })
  submittedAt: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  shares: number;

  @Prop({ default: 0 })
  comments: number;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
