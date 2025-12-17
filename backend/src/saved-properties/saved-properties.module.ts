import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SavedPropertiesController } from './saved-properties.controller';
import { SavedPropertiesService } from './saved-properties.service';
import { SavedProperty, SavedPropertySchema } from './saved-property.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SavedProperty.name, schema: SavedPropertySchema }]),
  ],
  controllers: [SavedPropertiesController],
  providers: [SavedPropertiesService],
})
export class SavedPropertiesModule {}
