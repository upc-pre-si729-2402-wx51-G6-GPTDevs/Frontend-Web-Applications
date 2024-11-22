import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseUrl = 'https://tasklinker.azurewebsites.net/api/v1';
  protected baseUrlDashboard = 'https://tasklinker-fake-api.vercel.app';


  constructor(protected http: HttpClient) { }
}
