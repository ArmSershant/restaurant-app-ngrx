import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Restaurant';
  isLoggedIn = false;
  username: string = '';
  ngOnInit(): void {}
  logout(): void {
    window.localStorage.removeItem('Token');
    this.router.navigate(['/app-signin']);
  }
  constructor(private router: Router) {}
}
