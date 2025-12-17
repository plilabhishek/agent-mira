import { PropertiesService } from './properties.service';
import { SearchPropertyDto } from './dto/search-property.dto';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
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
    getPropertyBasics(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/property-basic.schema").PropertyBasic, {}, {}> & import("./schemas/property-basic.schema").PropertyBasic & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getPropertyCharacteristics(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/property-characteristic.schema").PropertyCharacteristic, {}, {}> & import("./schemas/property-characteristic.schema").PropertyCharacteristic & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getPropertyImages(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/property-image.schema").PropertyImage, {}, {}> & import("./schemas/property-image.schema").PropertyImage & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}
