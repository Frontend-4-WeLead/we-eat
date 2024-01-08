import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FamousStore } from '../models/famous_store';
import { Store } from '../models/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)
  famousEndpointUrl = "../assets/sample-data/most_famous_stores_in_general.json";
  storesEndpointUrl = "../assets/sample-data/stores.json";

  getAllStores() {
    return this.http.get(this.storesEndpointUrl)
  }

  getStoreById(id: number) {
    return this.http.get<Store[]>(this.storesEndpointUrl).pipe(
      map(stores => stores.find(s => s.id === id))
    )
  }

  getProductsById(id: number) {
    console.log(id)
    return this.http.get<Store[]>(this.storesEndpointUrl).pipe(
      map((stores: Store[]) => stores.find(s => s.id === id)!['products'])
    )
  }
  getFamousStores() {
    return this.http.get<FamousStore[]>(this.famousEndpointUrl);
  }
}
