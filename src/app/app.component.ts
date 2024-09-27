import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Asegura de que sea 'styleUrls' en lugar de 'styleUrl'
})
export class AppComponent {
  title = 'TaskLinker';
  dropdownVisible = false; // Inicializa dropdownVisible
  private language: string | undefined;
}
