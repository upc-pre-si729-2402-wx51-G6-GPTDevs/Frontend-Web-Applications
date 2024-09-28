import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  protected currentLang: string = 'en';

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang;
  }

  router = inject(Router);

  home() {
    this.router.navigate(['/home']);
  }

  useLanguage() {
    if (this.currentLang == 'en')
      this.currentLang = 'es';
    else
      this.currentLang = 'en';

    this.translateService.use(this.currentLang);
  }
}
