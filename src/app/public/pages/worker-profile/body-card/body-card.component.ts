import { Component, OnInit } from '@angular/core';
import { Worker } from "../../../../tasklinker/model/worker";
import { WorkersService } from "../../../../tasklinker/services/workers.service";
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

  constructor(private workersService: WorkersService) { }

  ngOnInit(): void {
    this.workersService.getWorkers().subscribe({
      next: (data) => {
        this.workers = data;
        this.worker = this.workers[0];
      },
      error: (err) => {
        console.error('Error al cargar los trabajadores', err);
      },
    });
  }
}
