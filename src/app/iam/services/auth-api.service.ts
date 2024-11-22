import {HttpClient, HttpHeaders} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.entity';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  http = inject(HttpClient);
  signUpUrl = "https://tasklinker.azurewebsites.net/api/v1/authentication/sign-up";
  signInUrl = "https://tasklinker.azurewebsites.net/api/v1/authentication/sign-in";

  constructor() {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.signInUrl, { email, password });
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.signUpUrl, {
      email: user.email,
      password: user.password,
      cardNumber: user.cardNumber,
      expirementDate: user.expirementDate,
      securityCode: user.securityCode
    });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }
}
