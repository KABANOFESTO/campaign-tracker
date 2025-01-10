import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from '../schemas/campaign.schema';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Campaign.name) private campaignModel: Model<Campaign>) {}

  async getCampaignInfluencers(campaignId: string) {
    const campaign = await this.campaignModel.findById(campaignId);
    if (!campaign) throw new Error('Campaign not found');
    return campaign.influencers;
  }

  async updateSubmissionStatus(campaignId: string, influencerId: string, status: string) {
    const campaign = await this.campaignModel.findById(campaignId);
    if (!campaign) throw new Error('Campaign not found');

    const influencer = campaign.influencers.find((i) => i.influencerId === influencerId);
    if (!influencer) throw new Error('Influencer not part of this campaign');

    influencer.submission.status = status;
    return campaign.save();
  }
}
