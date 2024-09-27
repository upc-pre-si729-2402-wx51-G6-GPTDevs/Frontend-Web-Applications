import { Component } from '@angular/core';
import {provideRouter, RouterOutlet} from '@angular/router';
import { ToolBarContentComponent } from "./public/components/tool-bar-content/tool-bar-content.component";
import { BackgroundContentComponent } from "./public/components/background-content/background-content.component";
import {RouterLink} from '@angular/router';
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatAnchor, ToolBarContentComponent, BackgroundContentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskLinker';
  options = [
    { path: '/body-card', title: 'BodyCard' },
    { path: '/body-card-employer', title: 'BodyCardEmployer' },
    { path: '/dashboard-card', title: 'Dashboard' },

  ];

}
