import { Component } from '@angular/core';
import { WorkersService } from "../../services/workers.service";
import { Worker } from "../../models/worker";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-update-worker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.css']
})
export class UpdateWorkerComponent {
  workerId!: number;
  worker: Worker = new Worker({
    id: 0,
    firstname: '',
    lastname: '',
    emailAddress: '',
    street: '',
    numberStreet: '',
    district: '',
    postalCode: '',
    city: '',
    country: '',
    area: '',
    experienceWorking: 0,
    countryCode: '',
    number: '',
    value: 0,
    skillName: '',
    descriptionSkill: '',
    photoUrl: ''
  });
  isLoading: boolean = false;
  isWorkerFound: boolean = false;

  constructor(private workersService: WorkersService) {}

  onSearchWorker(): void {
    if (!this.workerId) {
      alert('Please provide a valid Worker ID');
      return;
    }

    this.isLoading = true;
    this.workersService.getWorkerById(this.workerId).subscribe({
      next: (worker) => {
        this.worker = worker;
        this.isLoading = false;
        this.isWorkerFound = true;
      },
      error: (err) => {
        console.error(err);
        alert('Worker not found');
        this.isLoading = false;
        this.isWorkerFound = false;
      }
    });
  }

  onUpdateWorker(): void {
    this.isLoading = true;
    this.workersService.updateWorker(this.workerId, this.worker).subscribe({
      next: (updatedWorker) => {
        alert(`Worker updated successfully: ${updatedWorker.firstname}`);
        this.isLoading = false;
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        alert('Error updating worker');
        this.isLoading = false;
      }
    });
  }

  resetForm(): void {
    this.workerId = 0;
    this.worker = new Worker({
      id: 0,
      firstname: '',
      lastname: '',
      emailAddress: '',
      street: '',
      numberStreet: '',
      district: '',
      postalCode: '',
      city: '',
      country: '',
      area: '',
      experienceWorking: 0,
      countryCode: '',
      number: '',
      value: 0,
      skillName: '',
      descriptionSkill: '',
      photoUrl: ''
    });
    this.isWorkerFound = false;
  }
}
