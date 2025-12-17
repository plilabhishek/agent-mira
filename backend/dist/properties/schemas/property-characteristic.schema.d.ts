import { Document } from 'mongoose';
export declare class PropertyCharacteristic extends Document {
    id: number;
    bedrooms: number;
    bathrooms: number;
    size_sqft: number;
    amenities: string[];
}
export declare const PropertyCharacteristicSchema: import("mongoose").Schema<PropertyCharacteristic, import("mongoose").Model<PropertyCharacteristic, any, any, any, Document<unknown, any, PropertyCharacteristic, any, {}> & PropertyCharacteristic & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PropertyCharacteristic, Document<unknown, {}, import("mongoose").FlatRecord<PropertyCharacteristic>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PropertyCharacteristic> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
