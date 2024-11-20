import { Component, OnInit } from '@angular/core';
import {Employer} from "../../../models/employer";
import {EmployersService} from "../../../services/employers.service";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-body-card-employer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './body-card-employer.component.html',
  styleUrl: './body-card-employer.component.css'
})
export class BodyCardEmployerComponent implements OnInit {
  employers: Employer[] = [];
  employer?: Employer;
  currentIndex: number = 0;

  constructor(private employersService: EmployersService) {
  }

  ngOnInit(): void {
    this.employersService.getEmployers().subscribe({
      next: (data) => {
        this.employers = data;
        this.employer = this.employers[this.currentIndex];
      },
      error: (err) => {
        console.error('Error al cargar los empleadores', err);
      },
    });

    this.employersService.employerAdded$.subscribe((newEmployer) => {
      this.employers.push(newEmployer);
      if (this.currentIndex === this.employers.length - 1) {
        this.currentIndex++;
      }
      this.employer = newEmployer;
    });
  }

  nextEmployer(): void {
    if (this.employers.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.employers.length;
      this.employer = this.employers[this.currentIndex];
    }
  }

  previousEmployer(): void {
    if (this.employers.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.employers.length) % this.employers.length;
      this.employer = this.employers[this.currentIndex];
    }
  }
}
