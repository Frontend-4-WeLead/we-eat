import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from '../../header/header.component';
import { DataService } from '../../services/data.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, CartItemComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})
export class StorePageComponent implements OnInit {
  storeInfo: any;
  data_service = inject(DataService)
  cart: Array<Product> = [];
  @Input() storeId: number = 0;

  ngOnInit(): void {
    this.data_service.getStoreById(this.storeId).subscribe({
      next: (data) => {
        this.storeInfo = data;
      }
    })
  }
  removeFromCart(product: Product) {
    let index = this.cart.findIndex((item) => item.title === product.title);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}

