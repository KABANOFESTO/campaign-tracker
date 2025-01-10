import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Campaign extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  deadline: Date;

  @Prop({
    default: [],
    type: [
      {
        influencerId: { type: String, required: true },
        submission: {
          link: { type: String, default: '' },
          status: { type: String, default: 'pending' },
          submissionDate: { type: Date, default: null },
        },
        metrics: {
          postsSubmitted: { type: Number, default: 0 },
          postingDates: { type: [Date], default: [] },
          engagementEstimate: { type: Number, default: 0 },
        },
      },
    ],
  })
  influencers: Array<any>;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
