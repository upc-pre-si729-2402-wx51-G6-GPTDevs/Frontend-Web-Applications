import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  http = inject(HttpClient);
  apiUrl = "https://tasklinker.azurewebsites.net/api/v1/authentication"

  constructor() { }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/sign-in`, body);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/sign-up`, user);
  }
}
