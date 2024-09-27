import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tool-bar-content',
  standalone: true,
  imports: [],
  templateUrl: './tool-bar-content.component.html',
  styleUrl: './tool-bar-content.component.css'
})
export class ToolBarContentComponent {
  constructor(private router: Router) {}

  switchUser() {
    if (this.router.url === '/body-card') {
      this.router.navigate(['/body-card-employer']);
    } else {
      this.router.navigate(['/body-card']);
    }
  }

  gotoDashboard(){
    this.router.navigate(['/dashboard-card']);
  }
}
