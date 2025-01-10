import { Controller, Get, Post, Param, Body, Request, UseGuards } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('influencer')
@UseGuards(JwtAuthGuard)
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}

  @Get('campaigns')
  async getJoinedCampaigns(@Request() req) {
    return this.influencerService.getJoinedCampaigns(req.user.userId);
  }

  @Post('campaigns/:campaignId/submit')
  async submitContent(
    @Param('campaignId') campaignId: string,
    @Body('link') link: string,
    @Request() req,
  ) {
    return this.influencerService.submitCampaignContent(campaignId, req.user.userId, link);
  }
}
