import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private publisher = new BehaviorSubject<Product[]>([]);

  publish(data: Product[]) {
    this.publisher.next(data);
  }

  getObservable() {
    return this.publisher.asObservable();
  }
}
