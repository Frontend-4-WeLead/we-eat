import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)

  getAllStores() {
    return this.http.get('http://localhost:3000/all')
  }

  getStoreById(id: number) {
    return this.http.get(`http://localhost:3000/${id}`)
  }

  getProductsById(id: number) {
    return this.http.get(`http://localhost:3000/${id}/products`)
  }
}
