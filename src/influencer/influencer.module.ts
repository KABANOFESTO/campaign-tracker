import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfluencerController } from './influencer.controller';
import { InfluencerService } from './influencer.service';
import { Campaign, CampaignSchema } from '../schemas/campaign.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
    JwtModule.register({}),
  ],
  controllers: [InfluencerController],
  providers: [InfluencerService, JwtStrategy],
  exports: [InfluencerService],
})
export class InfluencerModule {}
