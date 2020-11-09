import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  service: ProductsService;

  subUpdateProducts: Subscription;

  constructor(service: ProductsService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();

    this.subUpdateProducts = this.service.updateProducts.subscribe((products: ProductModel[]) => {
      this.products = products;
      console.log('ProductsComponent - products array updated.');
    });
  }

  onAddProduct(product: ProductModel) {
    this.products.unshift(product);
  }

  onDeleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }

  ngOnDestroy() {
    if (this.subUpdateProducts) {
      this.subUpdateProducts.unsubscribe();
    }
  }

}

