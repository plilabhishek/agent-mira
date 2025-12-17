"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const property_basic_schema_1 = require("./schemas/property-basic.schema");
const property_characteristic_schema_1 = require("./schemas/property-characteristic.schema");
const property_image_schema_1 = require("./schemas/property-image.schema");
let PropertiesService = class PropertiesService {
    constructor(propertyBasicModel, propertyCharacteristicModel, propertyImageModel) {
        this.propertyBasicModel = propertyBasicModel;
        this.propertyCharacteristicModel = propertyCharacteristicModel;
        this.propertyImageModel = propertyImageModel;
    }
    async onModuleInit() {
        await this.seedData();
    }
    async seedData() {
        const count = await this.propertyBasicModel.countDocuments();
        if (count > 0)
            return;
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
    async searchProperties(searchDto) {
        const basicQuery = {};
        const charQuery = {};
        if (searchDto.location) {
            basicQuery.location = { $regex: searchDto.location, $options: 'i' };
        }
        if (searchDto.minPrice) {
            basicQuery.price = { ...basicQuery.price, $gte: searchDto.minPrice };
        }
        if (searchDto.maxPrice) {
            basicQuery.price = { ...basicQuery.price, $lte: searchDto.maxPrice };
        }
        if (searchDto.bedrooms) {
            charQuery.bedrooms = searchDto.bedrooms;
        }
        if (searchDto.bathrooms) {
            charQuery.bathrooms = searchDto.bathrooms;
        }
        const basics = await this.propertyBasicModel.find(basicQuery).exec();
        const characteristics = await this.propertyCharacteristicModel.find(charQuery).exec();
        const images = await this.propertyImageModel.find().exec();
        const filteredIds = new Set(basics.filter(b => characteristics.some(c => c.id === b.id)).map(b => b.id));
        return basics
            .filter(basic => filteredIds.has(basic.id))
            .map(basic => ({
            ...basic.toObject(),
            ...characteristics.find(char => char.id === basic.id)?.toObject(),
            ...images.find(img => img.id === basic.id)?.toObject()
        }));
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
};
exports.PropertiesService = PropertiesService;
exports.PropertiesService = PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(property_basic_schema_1.PropertyBasic.name)),
    __param(1, (0, mongoose_1.InjectModel)(property_characteristic_schema_1.PropertyCharacteristic.name)),
    __param(2, (0, mongoose_1.InjectModel)(property_image_schema_1.PropertyImage.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], PropertiesService);
//# sourceMappingURL=properties.service.js.map