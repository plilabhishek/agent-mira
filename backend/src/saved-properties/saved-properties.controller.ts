import { Controller, Post, Get, Delete, Body, Query, Param } from '@nestjs/common';
import { SavedPropertiesService } from './saved-properties.service';

@Controller('saved-properties')
export class SavedPropertiesController {
  constructor(private readonly savedPropertiesService: SavedPropertiesService) {}

  @Post()
  async saveProperty(@Body() body: { propertyId: number; userId: string }) {
    return this.savedPropertiesService.saveProperty(body.propertyId, body.userId);
  }

  @Get()
  async getSavedProperties(@Query('userId') userId: string) {
    return this.savedPropertiesService.getSavedProperties(userId);
  }

  @Delete(':propertyId')
  async removeSavedProperty(
    @Param('propertyId') propertyId: number,
    @Query('userId') userId: string,
  ) {
    return this.savedPropertiesService.removeSavedProperty(propertyId, userId);
  }
}
