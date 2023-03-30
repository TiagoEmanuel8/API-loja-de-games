import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { ProductModule } from './product/product.module';
import { SalesProductsModule } from './sales-products/sales-products.module';

@Module({
  imports: [UsersModule, SalesModule, ProductModule, SalesProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
