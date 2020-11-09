import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() product: ProductModel

  service: ProductsService;

  constructor(service: ProductsService) {
    this.service = service;
  }

  ngOnInit(): void { }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.product.id);
    }
  }

  ngOnDestroy() {
    console.log('ProductDetailComponent.ngOnDestroy() invoked for product:', this.product.name);
  }

}
