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
            console.log('product:', product);
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
    const product: ProductModel = {
      ...this.product,
      price: +this.product.price,
      isAvailable: this.product.isAvailable || false
    };

    this.service.addProduct(product).subscribe(
      (response) => {
        console.log('Add product successful.');
        console.log('response:', response);

        this.router.navigate(['/products']);
      },  // success callback
      (error) => {
        console.log('Add product failed.');
        console.log('Error:', error);
      }   // error callback
    );
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
