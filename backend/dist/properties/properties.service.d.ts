import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { PropertyBasic } from './schemas/property-basic.schema';
import { PropertyCharacteristic } from './schemas/property-characteristic.schema';
import { PropertyImage } from './schemas/property-image.schema';
import { SearchPropertyDto } from './dto/search-property.dto';
export declare class PropertiesService implements OnModuleInit {
    private propertyBasicModel;
    private propertyCharacteristicModel;
    private propertyImageModel;
    constructor(propertyBasicModel: Model<PropertyBasic>, propertyCharacteristicModel: Model<PropertyCharacteristic>, propertyImageModel: Model<PropertyImage>);
    onModuleInit(): Promise<void>;
    private seedData;
    searchProperties(searchDto: SearchPropertyDto): Promise<{
        id: number;
        image_url: string;
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
        bedrooms: number;
        bathrooms: number;
        size_sqft: number;
        amenities: string[];
        title: string;
        price: number;
        location: string;
    }[]>;
    getAllProperties(): Promise<{
        id: number;
        image_url: string;
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
        bedrooms: number;
        bathrooms: number;
        size_sqft: number;
        amenities: string[];
        title: string;
        price: number;
        location: string;
    }[]>;
    getPropertyBasics(): Promise<(import("mongoose").Document<unknown, {}, PropertyBasic, {}, {}> & PropertyBasic & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getPropertyCharacteristics(): Promise<(import("mongoose").Document<unknown, {}, PropertyCharacteristic, {}, {}> & PropertyCharacteristic & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getPropertyImages(): Promise<(import("mongoose").Document<unknown, {}, PropertyImage, {}, {}> & PropertyImage & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}
