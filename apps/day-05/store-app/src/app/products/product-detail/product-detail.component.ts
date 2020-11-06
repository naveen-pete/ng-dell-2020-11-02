import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: ProductModel

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(productId: number) {
    if (confirm('Are you sure?')) {
      // const index = this.products.findIndex(p => p.id === productId);

      // if (index >= 0) {
      //   this.products.splice(index, 1);
      // }
    }
  }


}
