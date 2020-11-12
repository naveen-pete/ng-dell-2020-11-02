import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Common
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './common/notification/notification.component';

// Auth
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';

// Products
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

// http://localhost:4200 - Home
// http://localhost:4200/products - Products
// http://localhost:4200/products/new - Product Form
// http://localhost:4200/products/1 - Product Detail
// http://localhost:4200/products/1/edit - Product Form
// http://localhost:4200/sign-up - Sign up
// http://localhost:4200/login - Login
// http://localhost:4200/abc123
// 1. Page not found (404)
// 2. Redirect to Home

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      {
        path: '', component: NotificationComponent, data: {
          header: 'Note!',
          message: 'Use \'Add New Product\' button to create a product. Select a product to view its details.',
          type: 'info'
        }
      },
      { path: 'new', component: ProductFormComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductFormComponent }
    ]
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '' }
  {
    path: '**', component: NotificationComponent, data: {
      header: 'Sorry!',
      message: '404 - Page not found.',
      type: 'danger'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }