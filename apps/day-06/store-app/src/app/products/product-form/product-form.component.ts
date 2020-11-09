import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() addProduct = new EventEmitter<ProductModel>();

  showMessage: boolean = false;
  product: ProductModel = new ProductModel();

  service: ProductsService;

  constructor(service: ProductsService) {
    this.service = service;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.product.id = Date.now();

    // publish event
    // this.addProduct.emit(this.product);
    this.service.addProduct(this.product);
    this.product = new ProductModel();

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 4000);

  }

}
