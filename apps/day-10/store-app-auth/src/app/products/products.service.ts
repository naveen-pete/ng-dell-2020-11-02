import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ProductModel } from './product.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.dataApiUrl}/products`;
  updateProducts = new Subject<ProductModel[]>();

  private products: ProductModel[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAllProducts(): Observable<ProductModel[]> {
    const token = this.authService.user.token;

    return this.http.get(`${this.apiUrl}.json?auth=${token}`).pipe(
      // transform server response to match component's requirements
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

      // store a copy of products array in the service
      tap((products: ProductModel[]) => {
        this.products = [...products];
      })
    );
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get(`${this.apiUrl}/${id}.json`)
      .pipe(
        // server response does not contain the id, so add it
        map((responseData: any) => {
          const product: ProductModel = {
            ...responseData,
            id: id
          }
          return product;
        }),

        // update the array with the product received from the server, 
        // raise an event
        tap((product: ProductModel) => {
          this.products = this.products.map(
            p => p.id === product.id ? { ...product } : p
          );

          this.updateProducts.next(this.products);
        })
      );
  }

  addProduct(product: ProductModel) {
    return this.http.post(`${this.apiUrl}.json`, product).pipe(
      // once the product is saved in the server, add it to the array and
      // raise an event
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

  updateProduct(id: string, product: ProductModel) {
    return this.http.patch(`${this.apiUrl}/${id}.json`, product)
      .pipe(
        // once the product is saved in the server, update array with 
        // updated product and raise an event
        tap((responseData: any) => {
          const updatedProduct: ProductModel = {
            ...responseData,
            id: id
          };
          this.products = this.products.map(
            p => p.id === id ? updatedProduct : p
          );

          this.updateProducts.next(this.products);
        })
      );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}.json`).pipe(
      // once the product is deleted in the server, remove it from
      // the array and raise an event
      tap(() => {
        this.products = this.products.filter(p => p.id !== id);

        this.updateProducts.next(this.products);
      })
    );
  }
}
