import {Component, OnInit} from '@angular/core';
import {WorkersService} from "../../services/workers.service";
import {Worker} from "../../models/worker";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-get-all-workers',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './get-all-workers.component.html',
  styleUrl: './get-all-workers.component.css'
})
export class GetAllWorkersComponent implements OnInit {
  workers: Worker[] = [];

  constructor(private workersService: WorkersService) {}

  ngOnInit(): void {
    this.fetchWorkers();
  }

  fetchWorkers(): void {
    this.workersService.getWorkers().subscribe({
      next: (data) => {
        this.workers = data;
      },
      error: (err) => {
        console.error('Error fetching workers:', err);
      }
    });
  }
}
