import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewDTO } from 'src/app/models/review';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = `http://localhost:5240/reviews`;

  constructor(private router: Router, private http: HttpClient) { 
  }
  
  createReview(reviewBody: ReviewDTO) {
    console.log('review service.ts', reviewBody)
    return this.http.post(this.baseUrl, reviewBody)
  }
}
