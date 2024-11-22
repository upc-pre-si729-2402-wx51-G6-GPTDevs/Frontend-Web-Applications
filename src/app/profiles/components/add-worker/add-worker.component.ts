import {Component, inject, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {WorkersService} from "../../services/workers.service";
import {Route, Router} from "@angular/router";
import {Worker} from "../../models/worker";

@Component({
  selector: 'app-add-worker',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './add-worker.component.html',
  styleUrl: './add-worker.component.css'
})
export class AddWorkerComponent {
  workerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workerService: WorkersService,
    private router: Router
  ) {
    this.workerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      emailAddress: [''],
      number: [''],
      street: [''],
      numberStreet: [''],
      district: [''],
      postalCode: [''],
      city: [''],
      country: [''],
      area: [''],
      experienceWorking: [0],
      countryCode: [''],
      skillName: [''],
      value: [1],
      descriptionSkill: [''],
      photoUrl: ['']
    });
  }

  onSubmit() {
    if (this.workerForm.valid) {
      const newWorker = this.workerForm.value;

      this.workerService.addWorker(newWorker).subscribe({
        next: () => {
          alert('Worker added successfully!');
          this.router.navigate(['/profile-worker']);
        },
        error: (err) => {
          console.error('Error adding worker:', err);
          alert('There was an error adding the worker. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
