import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NotFoundComponent } from './common/not-found/not-found.component';
import { NotificationComponent } from './common/notification/notification.component';
import { SpinnerComponent } from './common/spinner/spinner.component';

import { HomeComponent } from './home/home.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';

import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    NotFoundComponent,
    NotificationComponent,
    SpinnerComponent,

    HomeComponent,

    SignUpComponent,
    LoginComponent,

    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
