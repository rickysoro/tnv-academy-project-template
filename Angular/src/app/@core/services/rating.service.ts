import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Rating } from 'src/app/models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
API_URL = 'http://localhost:1234/api'

  constructor(private http: HttpClient, private router: Router) { }

  getRating(userId: number, movieId: number) {
    return this.http.get<Rating>(`${this.API_URL}/rating/${userId}`)
  }
}
