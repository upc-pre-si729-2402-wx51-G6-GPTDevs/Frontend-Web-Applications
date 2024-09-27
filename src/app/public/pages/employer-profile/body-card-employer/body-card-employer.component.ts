import { Component, OnInit } from '@angular/core';
import { Employer} from "../../../../tasklinker/model/employer";
import { EmployersService } from "../../../../tasklinker/services/employers.service";

@Component({
  selector: 'app-body-card-employer',
  standalone: true,
  imports: [],
  templateUrl: './body-card-employer.component.html',
  styleUrl: './body-card-employer.component.css'
})
export class BodyCardEmployerComponent implements OnInit {
  employers:Employer[]=[];
  employer?:Employer;

  constructor(private employersService: EmployersService) {}

  ngOnInit(): void {
    this.employersService.getEmployers().subscribe({
      next: (data) => {
        this.employers = data;
        this.employer = this.employers[0];
      },
      error: (err) => {
        console.error('Error al cargar los empleadores', err);
      },
    });
  }
}
