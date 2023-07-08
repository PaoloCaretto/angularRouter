import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product?: Product;

  constructor(private route: ActivatedRoute) {
    const { id } = route.snapshot.params ?? {};

    fetch('https://dummyjson.com/products/' + id)
      .then((res) => res.json())
      .then((json) => (this.product = json));
  }
}
