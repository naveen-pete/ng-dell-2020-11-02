import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];

  subUpdateProducts: Subscription;

  constructor(
    private service: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      (products: ProductModel[]) => {
        this.products = products;
      },  // success callback
      (error) => {
        console.log('Get all products failed.');
        console.log('Error:', error);
      }   // error callback
    );

    this.subUpdateProducts = this.service.updateProducts.subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }

  onAdd() {
    this.router.navigate(['/products/new']);
  }

  ngOnDestroy() {
    if (this.subUpdateProducts) {
      this.subUpdateProducts.unsubscribe();
    }
  }

}
