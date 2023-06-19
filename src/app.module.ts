import { Module } from '@nestjs/common';
import { PersonsModule } from './persons/persons.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: 'db.sqlite',
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
    PersonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
