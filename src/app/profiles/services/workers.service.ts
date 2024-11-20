import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from 'rxjs';
import {Worker} from "../models/worker";
import { BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class WorkersService extends BaseService {

  private workerAddedSource = new Subject<Worker>();
  workerAdded$ = this.workerAddedSource.asObservable();

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.baseUrl}/workers`);
  }

  addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(`${this.baseUrl}/workers`, worker).pipe(
      tap((newWorker: Worker) => this.workerAddedSource.next(newWorker))
    );
  }

  deleteWorker(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/workers/${id}`);
  }

  getWorkerById(id: number): Observable<Worker> {
    return this.http.get<Worker>(`${this.baseUrl}/workers/${id}`);
  }

  updateWorker(id: number, worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(`${this.baseUrl}/workers/${id}`, worker);
  }


}
