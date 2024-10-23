// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ 
    ItemsModule,  
    ConfigModule.forRoot({ isGlobal: true }), 
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
