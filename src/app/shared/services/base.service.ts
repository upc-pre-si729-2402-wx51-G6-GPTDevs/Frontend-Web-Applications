import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseUrl = 'http://localhost:8080/api/v1';
  protected baseUrlDashboard = 'https://tasklinker-fake-api.vercel.app';


  constructor(protected http: HttpClient) { }
}
