import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from '../store-page/components/product/product.component';
import { AddressService } from '../../services/address.service';

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
  address: string = "";
  total: number = 0;

  ngOnInit(): void {

    this.cart_service.getObservable().subscribe({
      next: (data) => {
        this.cart = data;
      }
    })

    // PLACEHOLDER DATA
    this.cart = [
      {
        "title": "Big Mac",
        "price": 4.99
      },
      {
        "title": "Crispy McBacon",
        "price": 3.99
      },
      {
        "title": "Deluxe Burger",
        "price": 2.99
      },
      {
        "title": "Deluxe Burger",
        "price": 2.99
      }
    ]
    this.total = this.cart.reduce((acc, curr) => acc + curr.price, 0);
    // END PLACEHOLDER DATA
    this.address_service.getObservable().subscribe({
      next: (data) => {
        this.address = data;
      }
    })
  }

}
