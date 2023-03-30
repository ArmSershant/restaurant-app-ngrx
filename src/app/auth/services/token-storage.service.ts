import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private http: HttpClient) {}
  public fetchUser(): Observable<User> {
    return this.http.get<User>(`http://localhost:5000/profile`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
  }
}
