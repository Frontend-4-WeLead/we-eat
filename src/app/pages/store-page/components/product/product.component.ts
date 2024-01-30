import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private localStorageService: LocalStorageService) {}

  @Input() cart: Array<Product> = [];
  @Input() product: Product = { title: "", price: 0 };

  addToCart() {
    this.cart.push(this.product)
    // console.log(this.cart)
     this.localStorageService.setItem('Cart', JSON.stringify(this.cart));
  }
  
}