import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesProductsService } from './sales-products.service';
import { CreateSalesProductDto } from './dto/create-sales-product.dto';
import { UpdateSalesProductDto } from './dto/update-sales-product.dto';

@Controller('sales-products')
export class SalesProductsController {
  constructor(private readonly salesProductsService: SalesProductsService) {}

  @Post()
  create(@Body() createSalesProductDto: CreateSalesProductDto) {
    return this.salesProductsService.create(createSalesProductDto);
  }

  @Get()
  findAll() {
    return this.salesProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesProductDto: UpdateSalesProductDto) {
    return this.salesProductsService.update(+id, updateSalesProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesProductsService.remove(+id);
  }
}
