import { Component, inject, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.entity';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule, MatCardModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() email: string = ''
  @Input() password: string = ''
  @Input() cardNumber: string = ''
  @Input() expirementDate: string = ''
  @Input() securityCode: string = ''

  router = inject(Router);
  authApi = inject(AuthApiService);

  onSubmit() {
    const user = new User({ email: this.email, password: this.password, cardNumber: this.cardNumber, expirementDate: this.expirementDate, securityCode: this.securityCode });

    this.authApi.register(user).subscribe();
    this.router.navigate(['/home']);
  }
}
