import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  onSubmit(form: NgForm) {
    this.authService.register(form.value).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('Token', data.token);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    form.resetForm();
    this.router.navigate(['/app-signin']);
  }
  constructor(private authService: AuthService, private router: Router) {}
}
