import { Document } from 'mongoose';
export declare class Property extends Document {
    id: number;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size_sqft: number;
    amenities: string[];
    image_url: string;
}
export declare const PropertySchema: import("mongoose").Schema<Property, import("mongoose").Model<Property, any, any, any, Document<unknown, any, Property, any, {}> & Property & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Property, Document<unknown, {}, import("mongoose").FlatRecord<Property>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Property> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
