import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Employer} from "../../models/employer";
import {EmployersService} from "../../services/employers.service";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-get-all-employers',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './get-all-employers.component.html',
  styleUrl: './get-all-employers.component.css'
})
export class GetAllEmployersComponent implements OnInit {
  employers: Employer[] = [];

  constructor(private employersService: EmployersService) {}

  ngOnInit(): void {
    this.fetchEmployers();
  }

  fetchEmployers(): void {
    this.employersService.getEmployers().subscribe({
      next: (data) => {
        this.employers = data;
      },
      error: (err) => {
        console.error('Error fetching employers:', err);
      },
    });
  }
}
