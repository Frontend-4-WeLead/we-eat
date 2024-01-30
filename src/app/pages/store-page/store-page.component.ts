import { Component, Input, NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DataService } from '../../services/data.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { Product } from '../../models/product';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent,
    FooterComponent, CartItemComponent, PageNotFoundComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})

export class StorePageComponent implements OnInit {
  storeInfo: any;
  data_service = inject(DataService)
  cart_service = inject(CartService)
  cart: Array<Product> = [];
  @Input() storeId: number = 0;
  router = inject(Router);
  localStorage_service = inject(LocalStorageService)

  


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

    //---------------
    this.cart = JSON.parse(localStorage.getItem('Cart') || '[]');
  }

  removeFromCart(cartIndex: number) {
    if (cartIndex > -1) {
      this.cart.splice(cartIndex, 1);
    }
    this.localStorage_service.setItem('Cart', JSON.stringify(this.cart));
  }

  goToCheckout() {
    this.cart_service.publish(this.cart);
    console.log(this.cart);
    this.router.navigate(['/checkout']);
  }
}

