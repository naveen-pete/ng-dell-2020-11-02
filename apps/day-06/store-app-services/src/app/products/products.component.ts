import { Component, OnInit, OnDestroy } from '@angular/core';
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

  subUpdateProducts: Subscription;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();

    this.subUpdateProducts = this.service.updateProducts.subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    if (this.subUpdateProducts) {
      this.subUpdateProducts.unsubscribe();
    }
  }

}
