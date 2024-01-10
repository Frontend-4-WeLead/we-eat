import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private publisher = new BehaviorSubject<any>({});

  publish(data: any) {
    this.publisher.next(data);
  }

  getObservable() {
    return this.publisher.asObservable();
  }
}
