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
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule, MatCardModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authApiService: AuthApiService,
    private http: HttpClient
  ) {}

  onSubmit() {
    this.http.post('https://tasklinker.azurewebsites.net/api/v1/authentication/sign-in', {
      email: this.email,
      password: this.password
    }).subscribe(
      (response: any) => {
        const token = response.token;
        if (token) {
          this.authApiService.saveToken(token);
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.error('Error de login', error);
      }
    );
  }
}
