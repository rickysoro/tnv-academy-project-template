import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ReviewService } from 'src/app/@core/services/review.service';
import { MoviesService } from 'src/app/@core/services/movies.service';
import { MovieData } from 'src/app/models/movieData';
import { MoviesItemComponent } from '../movies/movies-item/movies-item.component';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  movieId: number;

  constructor(private activatedRoute: ActivatedRoute, private reviewService: ReviewService, private authService: AuthService) { 
    this.movieId = this.activatedRoute.snapshot.params['movieId'];
  }

  /* onSubmit(form: NgForm) {
    console.log(form.value)
  } */

  createReviewBody(form: NgForm) {
    let review = {
      userId: this.authService.getCurrentUser().id,
      movieId: this.movieId,
      comment: form.value                                 /* JSON.stringify(form) -> Si vide ma JSON  */
    }
    return review;
  }

  insertReview(form: NgForm) {
    let review = this.createReviewBody(form.value);
    console.log(form)
    this.reviewService.createReview(review).subscribe({
      next: () => { console.log(review); }
    });
  }

  ngOnInit(): void {
  }
}
