import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { Campaign, CampaignSchema } from '../schemas/campaign.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
    JwtModule.register({}),
  ],
  controllers: [BrandController],
  providers: [BrandService, JwtStrategy],
  exports: [BrandService],
})
export class BrandModule {}
