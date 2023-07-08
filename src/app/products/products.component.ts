import { Component } from '@angular/core';
import { ProductList } from '../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productList?: ProductList;

  constructor() {
    fetch('https://dummyjson.com/products/')
      .then((res) => res.json())
      .then((json) => (this.productList = json));
  }
}
