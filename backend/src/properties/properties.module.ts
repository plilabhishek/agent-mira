import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { PropertyBasic, PropertyBasicSchema } from './schemas/property-basic.schema';
import { PropertyCharacteristic, PropertyCharacteristicSchema } from './schemas/property-characteristic.schema';
import { PropertyImage, PropertyImageSchema } from './schemas/property-image.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PropertyBasic.name, schema: PropertyBasicSchema },
      { name: PropertyCharacteristic.name, schema: PropertyCharacteristicSchema },
      { name: PropertyImage.name, schema: PropertyImageSchema },
    ]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
