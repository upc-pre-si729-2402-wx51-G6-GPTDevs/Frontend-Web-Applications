import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-worker-management',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './worker-management.component.html',
  styleUrl: './worker-management.component.css'
})
export class WorkerManagementComponent {

}
