import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // importa el RouterOutlet 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambiamos a styleUrls (plural)
})
export class AppComponent {
  title = 'TaskLinker';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}
