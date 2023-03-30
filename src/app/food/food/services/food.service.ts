import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  public fetchFood(): Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:5000/foods');
  }

  public fetchAddFood(food: Food): Observable<Food> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Food>(
      'http://localhost:5000/addfood',
      food,
      httpOptions
    );
  }

  public fetchSingleFood(id: number): Observable<Food> {
    return this.http.get<Food>(`http://localhost:5000/food/${id}`);
  }
  constructor(private http: HttpClient) {}
}
