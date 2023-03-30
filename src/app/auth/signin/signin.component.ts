import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user = {
    username: '',
    password: '',
  };
  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('Token', data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate([`app-profile`]);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  constructor(private router: Router, private authService: AuthService) {}
}
