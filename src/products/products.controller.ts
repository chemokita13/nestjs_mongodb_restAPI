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
    return 'holaa';
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update() {
    return 0;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 0;
  }
}
