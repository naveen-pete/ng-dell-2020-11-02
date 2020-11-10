import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

// http://localhost:4200 - Home
// http://localhost:4200/products - Products
// http://localhost:4200/products/new - ProductForm
// http://localhost:4200/products/1 - Product Detail
// http://localhost:4200/sign-up - Sign up
// http://localhost:4200/login - Login
// http://localhost:4200/abc123
// 1. Page not found (404)
// 2. Redirect to Home

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'new', component: ProductFormComponent },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '' }
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    ProductListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
