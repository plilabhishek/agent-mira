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
exports.SavedPropertiesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const saved_property_schema_1 = require("./saved-property.schema");
let SavedPropertiesService = class SavedPropertiesService {
    constructor(savedPropertyModel) {
        this.savedPropertyModel = savedPropertyModel;
    }
    async saveProperty(propertyId, userId) {
        const existingSave = await this.savedPropertyModel.findOne({ propertyId, userId });
        if (existingSave)
            return existingSave;
        const savedProperty = new this.savedPropertyModel({ propertyId, userId });
        return savedProperty.save();
    }
    async getSavedProperties(userId) {
        return this.savedPropertyModel.find({ userId }).exec();
    }
    async removeSavedProperty(propertyId, userId) {
        await this.savedPropertyModel.deleteOne({ propertyId, userId });
    }
};
exports.SavedPropertiesService = SavedPropertiesService;
exports.SavedPropertiesService = SavedPropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(saved_property_schema_1.SavedProperty.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SavedPropertiesService);
//# sourceMappingURL=saved-properties.service.js.map