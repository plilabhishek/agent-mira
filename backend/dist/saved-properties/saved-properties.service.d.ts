import { Model } from 'mongoose';
import { SavedProperty } from './saved-property.schema';
export declare class SavedPropertiesService {
    private savedPropertyModel;
    constructor(savedPropertyModel: Model<SavedProperty>);
    saveProperty(propertyId: number, userId: string): Promise<SavedProperty>;
    getSavedProperties(userId: string): Promise<SavedProperty[]>;
    removeSavedProperty(propertyId: number, userId: string): Promise<void>;
}
