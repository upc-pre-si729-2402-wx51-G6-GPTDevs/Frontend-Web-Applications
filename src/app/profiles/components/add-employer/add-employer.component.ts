import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployersService} from "../../services/employers.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-add-employer',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employer.component.html',
  styleUrl: './add-employer.component.css'
})
export class AddEmployerComponent {

  employerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employerService: EmployersService,
    private router: Router
  ) {
    this.employerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      location: [''],
      name: [''],
      numberOfEmployees: ['0'],
      website: [''],
      industryName: [''],
      countryCode: [''],
      number: [''],
      photoUrl: [''],
      paymentMethod: ['']
    });
  }


  onSubmit() {
    if (this.employerForm.valid) {
      const newEmployer = this.employerForm.value;

      this.employerService.addEmployer(newEmployer).subscribe({
        next: () => {
          alert('Employer added successfully!');
          this.router.navigate(['/profile-employer']);
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

}
