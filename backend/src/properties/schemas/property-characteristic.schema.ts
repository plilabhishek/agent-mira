import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PropertyCharacteristic extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  bedrooms: number;

  @Prop({ required: true })
  bathrooms: number;

  @Prop({ required: true })
  size_sqft: number;

  @Prop([String])
  amenities: string[];
}

export const PropertyCharacteristicSchema = SchemaFactory.createForClass(PropertyCharacteristic);
