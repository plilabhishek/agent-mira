import { Document } from 'mongoose';
export declare class SavedProperty extends Document {
    propertyId: number;
    userId: string;
}
export declare const SavedPropertySchema: import("mongoose").Schema<SavedProperty, import("mongoose").Model<SavedProperty, any, any, any, Document<unknown, any, SavedProperty, any, {}> & SavedProperty & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SavedProperty, Document<unknown, {}, import("mongoose").FlatRecord<SavedProperty>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SavedProperty> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
