import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent, // Components, Directives, Pipes
    HeaderComponent,
    ProductsComponent
    // c2,
    // c3,
    // ...
    // c-n
  ],
  imports: [
    BrowserModule,    // built-in module
    FormsModule
    // CustomersModule,  // custom module
    // ProductsModule    // custom module
  ],
  providers: [],    // Service
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular Modules - NgModules

// sayHi({
//   id: 10,
//   name: 'Naveen',
//   city: 'Bengaluru'
// })
// @NgModule()

// decorator - function - provides meta information
// C# - Attributes / Annotations
// AOP - Aspect Oriented Programming
// Cross-cutting Concerns

var obj = {
  id: 10,
  name: 'Naveen',
  city: 'Bengaluru'
};

// object - {}
// array - []