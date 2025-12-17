import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertyBasic } from './schemas/property-basic.schema';
import { PropertyCharacteristic } from './schemas/property-characteristic.schema';
import { PropertyImage } from './schemas/property-image.schema';
import { SearchPropertyDto } from './dto/search-property.dto';

@Injectable()
export class PropertiesService implements OnModuleInit {
  constructor(
    @InjectModel(PropertyBasic.name) private propertyBasicModel: Model<PropertyBasic>,
    @InjectModel(PropertyCharacteristic.name) private propertyCharacteristicModel: Model<PropertyCharacteristic>,
    @InjectModel(PropertyImage.name) private propertyImageModel: Model<PropertyImage>,
  ) {}

  async onModuleInit() {
    await this.seedData();
  }

  private async seedData() {
    const count = await this.propertyBasicModel.countDocuments();
    if (count > 0) return;

    const basics = [
      { id: 1, title: "3 BHK Apartment in Downtown", price: 450000, location: "New York, NY" },
      { id: 2, title: "2 BHK Condo with Sea View", price: 380000, location: "Miami, FL" },
      { id: 3, title: "Luxury Villa with Private Garden", price: 850000, location: "Los Angeles, CA" },
      { id: 4, title: "1 BHK Budget Apartment", price: 250000, location: "Austin, TX" },
      { id: 5, title: "Penthouse with Skyline View", price: 1200000, location: "San Francisco, CA" },
      { id: 6, title: "Cozy Studio in Central Park", price: 300000, location: "New York, NY" },
      { id: 7, title: "Lakefront House with Dock", price: 750000, location: "Chicago, IL" },
      { id: 8, title: "Modern Townhouse with Backyard", price: 600000, location: "Dallas, TX" },
      { id: 9, title: "4 BHK Duplex with Home Office", price: 920000, location: "Seattle, WA" },
      { id: 10, title: "Minimalist Smart Home", price: 700000, location: "Boston, MA" }
    ];

    const characteristics = [
      { id: 1, bedrooms: 3, bathrooms: 2, size_sqft: 1500, amenities: ["Gym", "Swimming Pool", "Parking"] },
      { id: 2, bedrooms: 2, bathrooms: 2, size_sqft: 1200, amenities: ["Beach Access", "Security", "Balcony"] },
      { id: 3, bedrooms: 4, bathrooms: 3, size_sqft: 2800, amenities: ["Private Garden", "Smart Home", "Garage"] },
      { id: 4, bedrooms: 1, bathrooms: 1, size_sqft: 800, amenities: ["Gym", "Laundry", "Security"] },
      { id: 5, bedrooms: 5, bathrooms: 4, size_sqft: 3500, amenities: ["Rooftop Terrace", "Smart Security", "Private Elevator"] },
      { id: 6, bedrooms: 1, bathrooms: 1, size_sqft: 600, amenities: ["Park View", "24/7 Concierge", "Fitness Center"] },
      { id: 7, bedrooms: 3, bathrooms: 2, size_sqft: 2000, amenities: ["Private Dock", "Boat Parking", "BBQ Area"] },
      { id: 8, bedrooms: 3, bathrooms: 3, size_sqft: 1800, amenities: ["Backyard", "Community Pool", "Pet Friendly"] },
      { id: 9, bedrooms: 4, bathrooms: 3, size_sqft: 2500, amenities: ["Home Office", "Solar Panels", "Two-Car Garage"] },
      { id: 10, bedrooms: 3, bathrooms: 2, size_sqft: 1900, amenities: ["Minimalist Design", "Smart Appliances", "Energy Efficient"] }
    ];

    const images = [
      { id: 1, image_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" },
      { id: 2, image_url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" },
      { id: 3, image_url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" },
      { id: 4, image_url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
      { id: 5, image_url: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg" },
      { id: 6, image_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" },
      { id: 7, image_url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" },
      { id: 8, image_url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" },
      { id: 9, image_url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
      { id: 10, image_url: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg" }
    ];

    await this.propertyBasicModel.insertMany(basics);
    await this.propertyCharacteristicModel.insertMany(characteristics);
    await this.propertyImageModel.insertMany(images);
  }

  async searchProperties(searchDto: SearchPropertyDto) {
    const basicQuery: any = {};
    const charQuery: any = {};

    if (searchDto.location) {
      // More flexible location matching
      const locationRegex = searchDto.location.split(/[\s,]+/).map(word => 
        word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).join('|');
      basicQuery.location = { $regex: locationRegex, $options: 'i' };
    }
    
    if (searchDto.minPrice !== undefined || searchDto.maxPrice !== undefined) {
      basicQuery.price = {};
      if (searchDto.minPrice !== undefined) {
        basicQuery.price.$gte = searchDto.minPrice;
      }
      if (searchDto.maxPrice !== undefined) {
        basicQuery.price.$lte = searchDto.maxPrice;
      }
    }
    
    if (searchDto.bedrooms !== undefined) {
      charQuery.bedrooms = searchDto.bedrooms;
    }
    
    if (searchDto.bathrooms !== undefined) {
      charQuery.bathrooms = searchDto.bathrooms;
    }

    console.log('Basic query:', basicQuery);
    console.log('Char query:', charQuery);

    const basics = await this.propertyBasicModel.find(basicQuery).exec();
    const characteristics = await this.propertyCharacteristicModel.find(charQuery).exec();
    const images = await this.propertyImageModel.find().exec();

    console.log('Found basics:', basics.length);
    console.log('Found characteristics:', characteristics.length);

    // Join data by ID - more flexible matching
    let filteredIds: Set<number>;
    
    if (Object.keys(basicQuery).length > 0 && Object.keys(charQuery).length > 0) {
      // Both queries have filters - find intersection
      const basicIds = new Set(basics.map(b => b.id));
      const charIds = new Set(characteristics.map(c => c.id));
      filteredIds = new Set([...basicIds].filter(id => charIds.has(id)));
    } else if (Object.keys(basicQuery).length > 0) {
      // Only basic filters
      filteredIds = new Set(basics.map(b => b.id));
    } else if (Object.keys(charQuery).length > 0) {
      // Only characteristic filters
      filteredIds = new Set(characteristics.map(c => c.id));
    } else {
      // No filters - return all
      const allBasics = await this.propertyBasicModel.find().exec();
      filteredIds = new Set(allBasics.map(b => b.id));
    }

    console.log('Filtered IDs:', Array.from(filteredIds));

    // Get all data for final result
    const allBasics = await this.propertyBasicModel.find().exec();
    const allCharacteristics = await this.propertyCharacteristicModel.find().exec();

    const result = allBasics
      .filter(basic => filteredIds.has(basic.id))
      .map(basic => ({
        ...basic.toObject(),
        ...allCharacteristics.find(char => char.id === basic.id)?.toObject(),
        ...images.find(img => img.id === basic.id)?.toObject()
      }));

    console.log('Final result count:', result.length);
    return result;
  }

  async getAllProperties() {
    const basics = await this.propertyBasicModel.find().exec();
    const characteristics = await this.propertyCharacteristicModel.find().exec();
    const images = await this.propertyImageModel.find().exec();

    return basics.map(basic => ({
      ...basic.toObject(),
      ...characteristics.find(char => char.id === basic.id)?.toObject(),
      ...images.find(img => img.id === basic.id)?.toObject()
    }));
  }

  async getPropertyBasics() {
    return this.propertyBasicModel.find().exec();
  }

  async getPropertyCharacteristics() {
    return this.propertyCharacteristicModel.find().exec();
  }

  async getPropertyImages() {
    return this.propertyImageModel.find().exec();
  }
}
