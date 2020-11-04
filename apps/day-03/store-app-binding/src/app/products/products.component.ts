import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName: string = 'Samsung Galaxy S10';
  productPrice: number = 100000;

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('Product saved.');
  }

  onSearch(event) {
    console.log('search text:', event.target.value);
  }

}
