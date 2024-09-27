import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:3000/api/v1/users"

  constructor() { }

  login(email: string, password: string) {
    return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`, { observe: 'response' });
  }

  register(user: User) {
    return this.http.post(this.apiUrl, user);
  }
}
