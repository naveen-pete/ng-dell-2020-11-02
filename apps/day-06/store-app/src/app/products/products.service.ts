import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from './product.model';

@Injectable()
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

  getAllProducts(): ProductModel[] {
    // Solution #1
    // return this.products.slice();

    // Solution #2
    return [...this.products];
  }

  addProduct(product: ProductModel) {
    product.id = Date.now();

    console.log('(before add) products:', this.products);
    // this.products.unshift(product);
    this.products = [product, ...this.products];
    console.log('(after add) products:', this.products);

    // Publish
    this.updateProducts.next(this.products);
    // this.addProduct.emit(this.product)
  }
}
