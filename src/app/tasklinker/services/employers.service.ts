import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Employer } from "../model/employer";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployersService extends BaseService{

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(`${this.baseUrl}/employers`);
  }
}
