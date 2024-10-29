import { Component, OnInit } from '@angular/core';
import {Worker} from "../../../models/worker";
import {WorkersService} from "../../../services/workers.service";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-body-card',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './body-card.component.html',
  styleUrl: './body-card.component.css'
})
export class BodyCardComponent implements OnInit {
  workers: Worker[] = [];
  worker?: Worker;
  currentIndex: number = 0;

  constructor(private workersService: WorkersService) { }

  ngOnInit(): void {
    this.workersService.getWorkers().subscribe({
      next: (data) => {
        this.workers = data;
        this.worker = this.workers[this.currentIndex];
      },
      error: (err) => {
        console.error('Error al cargar los trabajadores', err);
      },
    });

    this.workersService.workerAdded$.subscribe((newWorker) => {
      this.workers.push(newWorker);
      if (this.currentIndex === this.workers.length - 1) {
        this.currentIndex++;
      }
      this.worker = newWorker;
    });
  }

  nextWorker(): void {
    if (this.workers.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.workers.length;
      this.worker = this.workers[this.currentIndex];
    }
  }

  previousWorker(): void {
    if (this.workers.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.workers.length) % this.workers.length;
      this.worker = this.workers[this.currentIndex];
    }
  }
}

