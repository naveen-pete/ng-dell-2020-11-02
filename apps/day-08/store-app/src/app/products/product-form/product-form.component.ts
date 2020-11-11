import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage: boolean = false;
  isAddMode: boolean = true;

  id: number;
  product: ProductModel = new ProductModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id');

      if (this.id) {
        this.product = this.service.getProduct(this.id);
        if (!this.product) {
          this.isAddMode = true;
          this.product = new ProductModel();
        } else {
          this.isAddMode = false;
        }
      }
    });
  }

  onAdd() {
    const product: ProductModel = {
      ...this.product,
      price: +this.product.price,
      isAvailable: this.product.isAvailable || false
    };

    this.service.addProduct(product);
    this.router.navigate(['/products']);
  }

  onUpdate() {
    const product: ProductModel = {
      ...this.product,
      price: +this.product.price,
      isAvailable: this.product.isAvailable || false
    };

    this.service.updateProduct(product);
    this.router.navigate(['/products', this.id]);
  }

}
