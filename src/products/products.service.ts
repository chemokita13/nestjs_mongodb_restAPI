import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { NewProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find({});

    return products;
  }

  async getProductByID(productId: String): Promise<Product> {
    return await this.productModel.findById(productId);
  }

  async createProduct(newProductDto: NewProductDto): Promise<Product> {
    const newProduct = await new this.productModel(newProductDto);
    return await newProduct.save();
  }

  async updateProduct(
    productId: String,
    newProductDto: NewProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(productId, newProductDto, {
      new: true,
    });
  }

  async deleteProduct(productId: String): Promise<Product> {
    return await this.productModel.findByIdAndDelete(productId);
  }
}
