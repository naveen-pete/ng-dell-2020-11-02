import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: ProductModel

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id');
      this.product = this.service.getProduct(this.id);
    });
  }

  onEdit() {
    // http://localhost:4200/products/1/edit
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.product.id);
      this.router.navigate(['/products']);
    }
  }

}
