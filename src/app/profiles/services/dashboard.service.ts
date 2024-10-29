import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import {Dashboard} from "../models/dashboard";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService{

  getDashboard(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(`${this.baseUrl}/dashboard`);
  }
}
