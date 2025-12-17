import { Controller, Get, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { SearchPropertyDto } from './dto/search-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async getAllProperties() {
    return this.propertiesService.getAllProperties();
  }

  @Get('search')
  async searchProperties(@Query() searchDto: SearchPropertyDto) {
    return this.propertiesService.searchProperties(searchDto);
  }

  @Get('basics')
  async getPropertyBasics() {
    return this.propertiesService.getPropertyBasics();
  }

  @Get('characteristics')
  async getPropertyCharacteristics() {
    return this.propertiesService.getPropertyCharacteristics();
  }

  @Get('images')
  async getPropertyImages() {
    return this.propertiesService.getPropertyImages();
  }
}
