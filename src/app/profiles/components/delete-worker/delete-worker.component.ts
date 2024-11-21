import { Component } from '@angular/core';
import {WorkersService} from "../../services/workers.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-delete-worker',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './delete-worker.component.html',
  styleUrl: './delete-worker.component.css'
})
export class DeleteWorkerComponent {

  workerId: number = 0;

  constructor(
    private workersService: WorkersService,
    private router: Router
  ) {}

  onDelete() {
    if (this.workerId) {
      this.workersService.deleteWorker(this.workerId).subscribe({
        next: () => {
          alert('Trabajador eliminado correctamente.');
          this.router.navigate(['/profile-worker']);
        }
      });
    } else {
      alert('Por favor, ingresa un ID válido.');
    }
  }

}
