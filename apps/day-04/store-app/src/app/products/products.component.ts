import { Component, OnInit } from '@angular/core';

import { ProductModel } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S10',
      description: 'A smart phone from Samsung',
      price: 700000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'iPhone 12',
      description: 'A smart phone from Apple',
      price: 100000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Google Pixel 4',
      description: 'A smart phone from Google',
      price: 60000,
      isAvailable: true
    },
    {
      id: 4,
      name: 'Nokia',
      description: 'A smart phone from Nokia',
      price: 60000,
      isAvailable: true
    }
  ];

  // product: ProductModel = {
  //   id: 1,
  //   name: 'Samsung Galaxy S10',
  //   description: 'A smart phone from Samsung',
  //   price: 100000,
  //   isAvailable: true
  // };

  // productId: number = 1;
  // productName: string = 'Samsung Galaxy S10';
  // productDescription: string = 'A smart phone from Samsung';
  // productPrice: number = 100000;
  // productIsAvailable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showAvailability() {
    // return this.product.isAvailable ? 'Yes-1' : 'No-0';
  }
}

