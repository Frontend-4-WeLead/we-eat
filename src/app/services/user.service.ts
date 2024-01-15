import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

http = inject(HttpClient)
userEndPointUrl = "../assets/sample-data/user.json"

getUser() {
  return this.http.get<User[]>(this.userEndPointUrl)
  }
}