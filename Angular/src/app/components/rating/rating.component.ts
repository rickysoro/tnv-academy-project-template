import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { RatingService } from 'src/app/@core/services/rating.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Rating } from 'src/app/models/rating';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tnv-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  movieId: number
  /* starRating = new FormControl(0); */
  API_URL = 'localhost/1234/api';

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private ratingService: RatingService,
    private authService: AuthService) { 
    this.movieId = this.activatedRoute.snapshot.params['movieId'];
  }

  createRatingBody(form: NgForm) {
    console.log(form.value)
    let rating = {
      userId: this.authService.getCurrentUser().id,
      movieId: this.movieId,
      rating: form.value
    }
    return rating;
  }

  ngOnInit(): void {
  }

  starRating = new FormControl(0);

  createRating(rating: Rating) {
    return this.http.post<Rating>(`${this.API_URL}`, rating)
  }

}
