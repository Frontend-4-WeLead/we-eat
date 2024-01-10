import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from '../store-page/components/product/product.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {
  cart_service = inject(CartService)
  cart: Array<any> = [];

  ngOnInit(): void {
    this.cart_service.getObservable().subscribe({
      next: (data) => {
        this.cart = data;
      }
    })
  }

}
