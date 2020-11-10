import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: number;
  product: ProductModel

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id');
      this.product = this.service.getProduct(this.id);
    });
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.product.id);
    }
  }

  ngOnDestroy() {
    console.log('ProductDetailComponent.ngOnDestroy() invoked for product:', this.product.name);
  }

}
