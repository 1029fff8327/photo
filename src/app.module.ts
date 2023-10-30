import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module'; 
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MSQL_HOST,
      port: Number(process.env.MSQL_PORT),
      username: process.env.MSQL_USER,
      password: process.env.MSQL_PASSWORD,
      database: process.env.MSQL_DB,
      models:[],
    }),
     UsersModule, 
     ProductModule,
     AuthModule],
})
export class AppModule {}
