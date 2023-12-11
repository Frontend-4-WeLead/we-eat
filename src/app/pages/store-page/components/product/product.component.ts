import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() cart: Array<Product> = [];
  @Input() product: Product = { title: "", price: 0 };

  addToCart() {
    console.log(this.cart)
    this.cart.push(this.product)
    console.log(this.cart)
  }
}