import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() cart: any

  addToCart() {
    console.log(this.cart)
    this.cart.push({ title: this.title, price: this.price })
    console.log(this.cart)
  }
}