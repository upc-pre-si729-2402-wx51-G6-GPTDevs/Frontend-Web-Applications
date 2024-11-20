import { Component } from '@angular/core';
import {WorkersService} from "../../services/workers.service";
import {Router, RouterLink} from "@angular/router";
import {EmployersService} from "../../services/employers.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-delete-employer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './delete-employer.component.html',
  styleUrl: './delete-employer.component.css'
})
export class DeleteEmployerComponent {

  employerId: number = 0;

  constructor(
    private employersService: EmployersService,
    private router: Router
  ) {}

  onDelete() {
    if (this.employerId) {
      this.employersService.deleteEmployer(this.employerId).subscribe({
        next: () => {
          alert('Empleador eliminado correctamente.');
          this.router.navigate(['/profile-employer']);
        },
        error: (err) => {
          console.error('Error al eliminar Empleador', err);
          alert('Hubo un error al eliminar el empleador. Inténtalo nuevamente.');
        }
      });
    } else {
      alert('Por favor, ingresa un ID válido.');
    }
  }

}
