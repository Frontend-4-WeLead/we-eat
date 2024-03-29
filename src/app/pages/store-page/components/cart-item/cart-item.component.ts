import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  constructor(private localStorageService: LocalStorageService) {}

  @Input() product: Product = { title: '', price: 0 };
  @Input() cartIndex: number = -1;
  @Output() cartEmiter: EventEmitter<any> = new EventEmitter();


  removeFromCart() {
    this.cartEmiter.emit(this.cartIndex);
  }
}
