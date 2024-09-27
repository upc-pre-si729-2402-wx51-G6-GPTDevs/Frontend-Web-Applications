import { Component, inject, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';
import { User } from '../../models/user.entity';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule, MatCardModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() email: string = ''
  @Input() password: string = ''

  authApi = inject(AuthApiService);
  router = inject(Router);

  onSubmit() {
    this.authApi.login(this.email, this.password).subscribe(
      (response) => {
        const data: User[] = response.body as User[];


        if (data.length) {
          alert('Login successful.');
          this.router.navigate(['/home']);
        }
        else
          alert('Login failed. User does not exist or incorrect password.');
      }
    );
  }
}
