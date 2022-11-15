import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { NewProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/status')
  getStatus(@Res() res): JSON {
    return res.status(HttpStatus.OK).json({ status: 'OK' });
  }

  @Post('/new')
  newPost(@Body() newProduct: NewProductDto) {
    return this.productsService.createProduct(newProduct);
  }

  @Get()
  findAll() {
    return this.productsService.getProducts();
  }

  @Get('/find/:id')
  findOne(@Param('id') id: string) {
    return this.productsService.getProductByID(id);
  }

  @Post('/update')
  update(@Body() id: string, @Body() productToUpdate: NewProductDto) {
    return this.productsService.updateProduct(id, productToUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 0;
  }
}
