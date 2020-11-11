import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ProductModel } from './product.model';
import { LoggerService } from '../common/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://my-store-app-6a579.firebaseio.com/store-app/products';
  updateProducts = new Subject<ProductModel[]>();

  private products: ProductModel[] = [];

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get(`${this.apiUrl}.json`).pipe(

      map((responseData: any) => {
        if (!responseData) {
          return [];
        }

        const products: ProductModel[] = [];
        const keys = Object.keys(responseData);
        keys.forEach((key) => {
          const product: ProductModel = {
            ...responseData[key],
            id: key
          };
          products.push(product);
        })
        return products;
      }),

      tap((products: ProductModel[]) => {
        this.products = [...products];
      })
    );
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get(`${this.apiUrl}/${id}.json`)
      .pipe(
        map((responseData: any) => {
          const product: ProductModel = {
            ...responseData,
            id: id
          }
          return product;
        })
      );
  }

  addProduct(product: ProductModel) {
    return this.http.post(`${this.apiUrl}.json`, product).pipe(
      tap((responseData: any) => {
        const newProduct: ProductModel = {
          ...product,
          id: responseData.name
        }
        this.products = [...this.products, newProduct];
        this.updateProducts.next(this.products);
      })
    );
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(p => p.id !== id);
    this.updateProducts.next(this.products);

    this.logger.log('Product deleted successfully.');
  }

  updateProduct(product: ProductModel) {
    const productToUpdate = this.products.find(p => p.id === product.id);

    if (productToUpdate) {
      productToUpdate.name = product.name;
      productToUpdate.description = product.description;
      productToUpdate.price = product.price;
      productToUpdate.isAvailable = product.isAvailable;

      this.updateProducts.next(this.products);

      this.logger.log('Product updated successfully.');
    } else {
      this.logger.log('Product not available for update.');
    }
  }
}
