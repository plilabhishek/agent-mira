import { Document } from 'mongoose';
export declare class PropertyImage extends Document {
    id: number;
    image_url: string;
}
export declare const PropertyImageSchema: import("mongoose").Schema<PropertyImage, import("mongoose").Model<PropertyImage, any, any, any, Document<unknown, any, PropertyImage, any, {}> & PropertyImage & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PropertyImage, Document<unknown, {}, import("mongoose").FlatRecord<PropertyImage>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PropertyImage> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
