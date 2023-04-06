import { Module } from '@nestjs/common';
import { SupplyOrderService } from './supply-order.service';

@Module({
  providers: [SupplyOrderService]
})
export class SupplyOrderModule {}
