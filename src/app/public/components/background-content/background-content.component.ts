import { Component } from '@angular/core';
import {BodyCardComponent} from "../../pages/worker-profile/body-card/body-card.component";
import { BodyCardEmployerComponent } from "../../pages/employer-profile/body-card-employer/body-card-employer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-background-content',
  standalone: true,
  imports: [BodyCardComponent, BodyCardEmployerComponent, RouterOutlet],
  templateUrl: './background-content.component.html',
  styleUrl: './background-content.component.css'
})
export class BackgroundContentComponent {

}
