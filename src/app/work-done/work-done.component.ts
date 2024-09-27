import { Component } from '@angular/core';

@Component({
  selector: 'app-work-done',
  templateUrl: './work-done.component.html',
  standalone: true,
  styleUrls: ['./work-done.component.css']
})
export class WorkDoneComponent {

  mostrarHistorialRealizados = false;
  mostrarHistorialPublicados = false;

  // Función para abrir el modal
  openModal() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Función para cerrar el modal
  closeModal() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Función para alternar entre los historiales de trabajos realizados y publicados
  toggleHistorialTrabajos(tipo: string) {
    if (tipo === 'realizados') {
      this.mostrarHistorialRealizados = !this.mostrarHistorialRealizados;
      this.mostrarHistorialPublicados = false; // Ocultar el otro historial
    } else if (tipo === 'publicados') {
      this.mostrarHistorialPublicados = !this.mostrarHistorialPublicados;
      this.mostrarHistorialRealizados = false; // Ocultar el otro historial
    }
  }
}
