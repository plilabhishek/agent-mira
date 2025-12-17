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
exports.SavedPropertiesController = void 0;
const common_1 = require("@nestjs/common");
const saved_properties_service_1 = require("./saved-properties.service");
let SavedPropertiesController = class SavedPropertiesController {
    constructor(savedPropertiesService) {
        this.savedPropertiesService = savedPropertiesService;
    }
    async saveProperty(body) {
        return this.savedPropertiesService.saveProperty(body.propertyId, body.userId);
    }
    async getSavedProperties(userId) {
        return this.savedPropertiesService.getSavedProperties(userId);
    }
    async removeSavedProperty(propertyId, userId) {
        return this.savedPropertiesService.removeSavedProperty(propertyId, userId);
    }
};
exports.SavedPropertiesController = SavedPropertiesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SavedPropertiesController.prototype, "saveProperty", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SavedPropertiesController.prototype, "getSavedProperties", null);
__decorate([
    (0, common_1.Delete)(':propertyId'),
    __param(0, (0, common_1.Param)('propertyId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], SavedPropertiesController.prototype, "removeSavedProperty", null);
exports.SavedPropertiesController = SavedPropertiesController = __decorate([
    (0, common_1.Controller)('saved-properties'),
    __metadata("design:paramtypes", [saved_properties_service_1.SavedPropertiesService])
], SavedPropertiesController);
//# sourceMappingURL=saved-properties.controller.js.map