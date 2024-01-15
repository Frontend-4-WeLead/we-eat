import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private publisher = new BehaviorSubject<string>("");

  publish(data: string) {
    this.publisher.next(data);
  }

  getObservable() {
    return this.publisher.asObservable();
  }
}
