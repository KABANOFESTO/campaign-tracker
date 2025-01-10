import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from '../schemas/campaign.schema';

@Injectable()
export class InfluencerService {
  constructor(@InjectModel(Campaign.name) private campaignModel: Model<Campaign>) {}

  async getJoinedCampaigns(influencerId: string) {
    return this.campaignModel.find({ 'influencers.influencerId': influencerId });
  }

  async submitCampaignContent(campaignId: string, influencerId: string, link: string) {
    const campaign = await this.campaignModel.findById(campaignId);
    if (!campaign) throw new Error('Campaign not found');

    const influencer = campaign.influencers.find((i) => i.influencerId === influencerId);
    if (!influencer) throw new Error('Influencer not part of this campaign');

    influencer.submission = { link, status: 'pending', submissionDate: new Date() };
    return campaign.save();
  }
}
