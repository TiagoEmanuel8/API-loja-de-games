import { Injectable } from '@nestjs/common';
import { CreateSalesProductDto } from './dto/create-sales-product.dto';
import { UpdateSalesProductDto } from './dto/update-sales-product.dto';

@Injectable()
export class SalesProductsService {
  create(createSalesProductDto: CreateSalesProductDto) {
    return 'This action adds a new salesProduct';
  }

  findAll() {
    return `This action returns all salesProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesProduct`;
  }

  update(id: number, updateSalesProductDto: UpdateSalesProductDto) {
    return `This action updates a #${id} salesProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesProduct`;
  }
}
