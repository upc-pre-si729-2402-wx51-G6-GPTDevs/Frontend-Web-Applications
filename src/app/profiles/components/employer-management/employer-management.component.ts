import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-employer-management',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './employer-management.component.html',
  styleUrl: './employer-management.component.css'
})
export class EmployerManagementComponent {

}
