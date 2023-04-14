import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { SalesModule } from './modules/sales/sales.module';
import { ProductModule } from './modules/product/product.module';
import { SalesProductsModule } from './modules/sales-products/sales-products.module';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { users } from './modules/users/models/users.model';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Module({
  imports: [
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: process.env.HOST,
    //   port: +process.env.PORT,
    //   username: process.env.USER,
    //   password: process.env.PASSWORD,
    //   database: 'app-storeGame',
    //   define: {
    //     timestamps: false,
    //   },
    //   models: [users],
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    UsersModule,
    SalesModule,
    ProductModule,
    SalesProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
