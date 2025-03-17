import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'gestorpro',
      autoLoadEntities: true,
      synchronize: true, // Solo en desarrollo, NO en producción
    }),
  ],
  controllers: [AppController], // Mantiene los controladores
  providers: [AppService], // Mantiene los servicios
})
export class AppModule {}
