import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class SavedProperty extends Document {
  @Prop({ required: true })
  propertyId: number;

  @Prop({ required: true })
  userId: string;
}

export const SavedPropertySchema = SchemaFactory.createForClass(SavedProperty);
