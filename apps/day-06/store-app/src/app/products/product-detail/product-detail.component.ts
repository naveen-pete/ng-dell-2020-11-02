import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: ProductModel
  @Output() deleteProduct = new EventEmitter<number>();

  constructor() {
    console.log('ProductDetailComponent constructor() invoked.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ProductDetailComponent ngOnChanges() invoked.');
  }

  ngOnInit(): void {
    console.log('ProductDetailComponent ngOnInit() invoked.');
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.deleteProduct.emit(this.product.id);
    }
  }

}
