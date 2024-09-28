import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publish-task',
  templateUrl: './publish-task.component.html',
  imports: [NgIf, RouterLink],
  standalone: true,
  styleUrls: ['./publish-task.component.scss']
})
export class PublishTaskComponent {
  // Variable para almacenar el mensaje de éxito
  successMessage: string = '';

  // Lógica del componente
  onSubmit() {
    this.successMessage = 'Formulario Publicado'; // Establece el mensaje de éxito
    console.log('Formulario enviado');
  }

  onFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      console.log('Subiendo archivo...', target.files);
      // Aquí puedes añadir la lógica para manejar los archivos subidos
    }
  }
}
