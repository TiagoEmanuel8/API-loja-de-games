import { PrismaService } from '../database/PrismaService';
import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  controllers: [SalesController],
  providers: [SalesService, PrismaService],
})
export class SalesModule {}
