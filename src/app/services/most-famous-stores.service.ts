import { Injectable, inject } from '@angular/core';
import { FamousStore } from '../models/famous_store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostFamousStoresService {
  http = inject(HttpClient);
  endpointUrl = "../assets/sample-data/most_famous_stores_in_general.json";

  constructor() { }

  getFamousStores(){
    return this.http.get<FamousStore[]>(this.endpointUrl);
  }

 
}
