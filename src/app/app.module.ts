import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
