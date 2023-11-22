import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)

  getX() {
    return this.http.get('http://localhost:3000/x')
  }

  getY() {
    return this.http.get('http://localhost:3000/y')
  }

  getZ() {
    return this.http.get('http://localhost:3000/z')
  }
}
