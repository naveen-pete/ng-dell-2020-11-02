import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from './product.model';
import { LoggerService } from '../common/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  updateProducts = new Subject<ProductModel[]>();

  private products: ProductModel[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S10',
      description: 'A smart phone from Samsung',
      price: 700000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'iPhone 12',
      description: 'A smart phone from Apple',
      price: 100000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Google Pixel 4',
      description: 'A smart phone from Google',
      price: 60000,
      isAvailable: true
    }
  ];

  constructor(private logger: LoggerService) { }

  getAllProducts(): ProductModel[] {
    return [...this.products];
  }

  getProduct(id: number): ProductModel | null {
    const product = this.products.find(p => p.id === id);

    if (product) {
      return { ...product };
    }

    return null;
  }

  addProduct(product: ProductModel) {
    product.id = Date.now();

    this.products = [product, ...this.products];
    this.updateProducts.next(this.products);

    this.logger.log('Product added successfully.');
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.updateProducts.next(this.products);

    this.logger.log('Product deleted successfully.');
  }

  // ProductForm component makes a call to this method
  updateProduct(product: ProductModel) {
    // write code to update a specific product within the array
    // raise updateProducts event
  }
}
