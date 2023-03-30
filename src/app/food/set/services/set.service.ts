import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Set, SetForm } from '../models/set.model';

@Injectable({
  providedIn: 'root',
})
export class SetService {
  public fetchSet(
    page: number,
    pageSize: number
  ): Observable<{ sets: Set[]; totalSets: number }> {
    return this.http.get<{ sets: Set[]; totalSets: number }>(
      `http://localhost:5000/showallset?page=${page}&pageSize=${pageSize}`
    );
  }

  public fetchAddSet(set: SetForm): Observable<Set> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Set>(
      'http://localhost:5000/addset',
      set,
      httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
