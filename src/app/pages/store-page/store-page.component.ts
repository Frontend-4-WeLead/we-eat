import { Component, Input, NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DataService } from '../../services/data.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { Product } from '../../models/product';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { FileNotFoundComponent } from '../file-not-found/file-not-found.component';


@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent,
    FooterComponent, CartItemComponent, FileNotFoundComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})

export class StorePageComponent implements OnInit {
  storeInfo: any;
  data_service = inject(DataService)
  cart: Array<Product> = [];
  @Input() storeId: number = 0;


  ngOnInit(): void {
    // Took me 2 hours to find that even though in Typescript i have defined
    // storeId as a number, it is still passed as a string from the router arguments :)))))
    // and i have to cast it to a number 
    this.storeId = +this.storeId;
    this.data_service.getStoreById(this.storeId).subscribe({
      next: (data) => {
        this.storeInfo = data;
      }
    })
  }
  removeFromCart(cartIndex: number) {
    if (cartIndex > -1) {
      this.cart.splice(cartIndex, 1);
    }
  }
}

