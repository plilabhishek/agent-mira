import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesModule } from './properties/properties.module';
import { SavedPropertiesModule } from './saved-properties/saved-properties.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb+srv://rajabhishek547_db_user:kLXtlSJQMPNAlPl9@agentmira.ugxgcbc.mongodb.net/agentmira'),
    PropertiesModule,
    SavedPropertiesModule,
  ],
})
export class AppModule {}
