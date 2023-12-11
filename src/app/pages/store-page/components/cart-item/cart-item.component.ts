import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() product: Product = { title: '', price: 0 };
  @Input() cart: Array<Product> = [];

  removeFromCart() {
    debugger;
    let index = this.cart.findIndex((item) => item.title === this.product.title);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
