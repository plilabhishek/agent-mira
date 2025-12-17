import { Document } from 'mongoose';
export declare class PropertyBasic extends Document {
    id: number;
    title: string;
    price: number;
    location: string;
}
export declare const PropertyBasicSchema: import("mongoose").Schema<PropertyBasic, import("mongoose").Model<PropertyBasic, any, any, any, Document<unknown, any, PropertyBasic, any, {}> & PropertyBasic & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PropertyBasic, Document<unknown, {}, import("mongoose").FlatRecord<PropertyBasic>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PropertyBasic> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
