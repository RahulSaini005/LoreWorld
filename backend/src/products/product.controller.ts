// backend/src/products/products.controller.ts
import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products?category=Fantasy
  @Get()
  async getProducts(@Query('category') category?: string) {
    return this.productsService.getProducts(category);
  }

  // GET /products/:sourceId
  @Get(':sourceId')
  async getProduct(@Param('sourceId') sourceId: string) {
    const p = await this.productsService.getProductBySourceId(sourceId);
    if (!p) return { message: 'Not found' };
    return p;
  }
}
