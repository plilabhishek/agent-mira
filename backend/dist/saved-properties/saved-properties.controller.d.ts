import { SavedPropertiesService } from './saved-properties.service';
export declare class SavedPropertiesController {
    private readonly savedPropertiesService;
    constructor(savedPropertiesService: SavedPropertiesService);
    saveProperty(body: {
        propertyId: number;
        userId: string;
    }): Promise<import("./saved-property.schema").SavedProperty>;
    getSavedProperties(userId: string): Promise<import("./saved-property.schema").SavedProperty[]>;
    removeSavedProperty(propertyId: number, userId: string): Promise<void>;
}
