import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PropertyImage extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  image_url: string;
}

export const PropertyImageSchema = SchemaFactory.createForClass(PropertyImage);
