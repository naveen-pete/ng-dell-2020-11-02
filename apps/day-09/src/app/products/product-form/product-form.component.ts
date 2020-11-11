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
  isAddMode: boolean = true;

  id: string;
  product: ProductModel = new ProductModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = map.get('id');

      if (this.id) {
        this.service.getProduct(this.id).subscribe(
          (product: ProductModel) => {
            this.product = product;
            if (!this.product) {
              this.isAddMode = true;
              this.product = new ProductModel();
            } else {
              this.isAddMode = false;
            }
          },
          (error) => {
            console.log('Get product failed.');
            console.log('Error:', error);
          }
        );
      }
    });
  }

  onAdd() {
    const { name, description, price, isAvailable } = this.product;

    const product = new ProductModel();
    product.name = name;
    product.description = description;
    product.price = +price;
    product.isAvailable = isAvailable || false;

    this.service.addProduct(product).subscribe(
      () => {
        this.router.navigate(['/products']);
      },  // success callback
      (error) => {
        console.log('Add product failed.');
        console.log('Error:', error);
      }   // error callback
    );
  }

  onUpdate() {
    const { name, description, price, isAvailable } = this.product;

    const product = new ProductModel();
    product.name = name;
    product.description = description;
    product.price = +price;
    product.isAvailable = isAvailable || false;

    this.service.updateProduct(this.id, product).subscribe(
      () => {
        this.router.navigate(['/products', this.id]);
      },  // success callback
      (error) => {
        console.log('Update product failed.');
        console.log('Error:', error);
      }   // error callback
    );
  }

}
