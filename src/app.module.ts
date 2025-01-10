// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { InfluencerModule } from './influencer/influencer.module';
import { BrandModule } from './brand/brand.module';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
    AuthModule,
    InfluencerModule,
    BrandModule,
  ],
})
export class AppModule {}
