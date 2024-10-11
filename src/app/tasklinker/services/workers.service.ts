import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker} from "../model/worker";
import { BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class WorkersService extends BaseService {

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.baseUrl}/workers`);
  }
}
