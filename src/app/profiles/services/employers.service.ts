import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import {Employer} from "../models/employer";
import {Observable, Subject, tap} from 'rxjs';
import {Worker} from "../models/worker";

@Injectable({
  providedIn: 'root'
})
export class EmployersService extends BaseService{

  private employerAddedSource = new Subject<Employer>();
  employerAdded$ = this.employerAddedSource.asObservable();

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(`${this.baseUrl}/employers`);
  }

  addEmployer(employer: Employer): Observable<Employer> {
    return this.http.post<Employer>(`${this.baseUrl}/employers`, employer).pipe(
      tap((newEmployer: Employer) => this.employerAddedSource.next(newEmployer))
    );
  }

  deleteEmployer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employers/${id}`);
  }

  getEmployerById(id: number): Observable<Employer> {
    return this.http.get<Employer>(`${this.baseUrl}/employers/${id}`);
  }

  updateEmployer(id: number, employer: Employer): Observable<Employer> {
    return this.http.put<Employer>(`${this.baseUrl}/employers/${id}`, employer);
  }
}
