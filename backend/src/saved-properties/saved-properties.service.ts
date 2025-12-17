import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SavedProperty } from './saved-property.schema';

@Injectable()
export class SavedPropertiesService {
  constructor(
    @InjectModel(SavedProperty.name) private savedPropertyModel: Model<SavedProperty>,
  ) {}

  async saveProperty(propertyId: number, userId: string): Promise<SavedProperty> {
    const existingSave = await this.savedPropertyModel.findOne({ propertyId, userId });
    if (existingSave) return existingSave;

    const savedProperty = new this.savedPropertyModel({ propertyId, userId });
    return savedProperty.save();
  }

  async getSavedProperties(userId: string): Promise<SavedProperty[]> {
    return this.savedPropertyModel.find({ userId }).exec();
  }

  async removeSavedProperty(propertyId: number, userId: string): Promise<void> {
    await this.savedPropertyModel.deleteOne({ propertyId, userId });
  }
}
