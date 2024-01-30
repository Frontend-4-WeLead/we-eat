import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from '../store-page/components/product/product.component';
import { AddressService } from '../../services/address.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {}

  cart_service = inject(CartService)
  address_service = inject(AddressService)
  cart: Array<any> = [];
  address: string = "MISSING ADDRESS";
  total: number = 0;
  router = inject(Router);
  orderCompleted: boolean=false;
  showAlert: boolean = false;

  ngOnInit(): void {

    // this.cart_service.getObservable().subscribe({
    //   next: (data) => {
    //     this.cart = data || this.cart;
    //   }
    // })

    this.cart = JSON.parse(localStorage.getItem('Cart') || '[]');

    this.total = this.cart.reduce((acc, curr) => acc + curr.price, 0);
    this.address_service.getObservable().subscribe({
      next: (data) => {
        this.address = data || this.address;
      }
    })
  }

  completePurchase() {
    if (this.cart && this.cart.length > 0 && this.address!="MISSING ADDRESS") {
      this.orderCompleted=true;
    }
    else if (this.address=="MISSING ADDRESS"){
      this.showAlert = true;
    }
  }
}
