import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { JwtAuthGuard } from '../auth/jwt.guard';


@Controller('brand')
@UseGuards(JwtAuthGuard)
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get('campaigns/:campaignId/influencers')
  async getInfluencers(@Param('campaignId') campaignId: string) {
    return this.brandService.getCampaignInfluencers(campaignId);
  }

  @Patch('campaigns/:campaignId/influencers/:influencerId/status')
  async updateStatus(
    @Param('campaignId') campaignId: string,
    @Param('influencerId') influencerId: string,
    @Body('status') status: string,
  ) {
    return this.brandService.updateSubmissionStatus(campaignId, influencerId, status);
  }
}
