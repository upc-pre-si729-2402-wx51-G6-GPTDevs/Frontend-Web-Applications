import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-worker-management',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './worker-management.component.html',
  styleUrl: './worker-management.component.css'
})
export class WorkerManagementComponent {

}
