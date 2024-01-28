import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from '../store-page/components/product/product.component';
import { AddressService } from '../../services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {
  cart_service = inject(CartService)
  address_service = inject(AddressService)
  cart: Array<any> = [];
  address: string = "MISSING ADDRESS";
  total: number = 0;
  router = inject(Router);
  orderCompleted: boolean=false;
  showAlert: boolean = false;

  ngOnInit(): void {

    this.cart_service.getObservable().subscribe({
      next: (data) => {
        this.cart = data || this.cart;
      }
    })

    this.total = this.cart.reduce((acc, curr) => acc + curr.price, 0);
    this.address_service.getObservable().subscribe({
      next: (data) => {
        this.address = data || this.address;
      }
    })
  }

  completePurchase() {
   /*  const max = 1000000;
    const min = 100000;
    alert(`Purchase with order number: "${(Math.random() * (max - min + 1) + min).toFixed(0)}" completed!\n` +
      `Your order will be delivered to "${this.address}" in 30 minutes!\n\n` +
      `Total: ${this.total}€\n` +
      `Cart: "${this.cart.map((item) => item.title).join(", ")}"\n\n` +
      `Thank you for choosing us!`);

    this.router.navigate(['/stores']); */
    if (this.cart && this.cart.length > 0 && this.address!="MISSING ADDRESS") {
      this.orderCompleted=true;
    }
    else if (this.address=="MISSING ADDRESS"){
      this.showAlert = true;
    }
  }
}
