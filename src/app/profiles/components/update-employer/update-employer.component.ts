import { Component } from '@angular/core';
import {Employer} from "../../models/employer";
import {EmployersService} from "../../services/employers.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-update-employer',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './update-employer.component.html',
  styleUrl: './update-employer.component.css'
})
export class UpdateEmployerComponent {
  employerId!: number;
  employer: Employer = new Employer({
    id: 0,
    firstname: '',
    lastname: '',
    location: '',
    name: '',
    numberOfEmployees: 0,
    website: '',
    industryName: '',
    countryCode: '',
    number: '',
    photoUrl: '',
    paymentMethod: ''
  });
  isLoading: boolean = false;
  isEmployerFound: boolean = false;

  constructor(private employerService: EmployersService) {}

  onSearchEmployer(): void {
    this.isLoading = true;
    this.employerService.getEmployerById(this.employerId).subscribe({
      next: (foundEmployer) => {
        this.employer = foundEmployer;
        this.isEmployerFound = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Employer not found');
        this.isLoading = false;
      }
    });
  }

  onUpdateEmployer(): void {
    this.isLoading = true;
    this.employerService.updateEmployer(this.employerId, this.employer).subscribe({
      next: (updatedEmployer) => {
        alert(`Employer updated successfully: ${updatedEmployer.firstname}`);
        this.isLoading = false;
        this.resetForm();
      }
    });
  }

  resetForm(): void {
    this.employerId = 0;
    this.isEmployerFound = false;
    this.employer = new Employer({
      id: 0,
      firstname: '',
      lastname: '',
      location: '',
      name: '',
      numberOfEmployees: 0,
      website: '',
      industryName: '',
      countryCode: '',
      number: '',
      photoUrl: '',
      paymentMethod: ''
    });
  }
}
