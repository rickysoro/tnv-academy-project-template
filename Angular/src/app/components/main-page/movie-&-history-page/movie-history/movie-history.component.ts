import { compileNgModule } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/@core/services/review.service';
import { ReviewDTO } from 'src/app/models/review';
import { RegisterDTO, User } from 'src/app/models/user';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'tnv-movie-history',
  templateUrl: './movie-history.component.html',
  styleUrls: ['./movie-history.component.scss']
})
export class MovieHistoryComponent implements OnInit {

  form: string  = "";

  constructor(private router: Router, private reviewService: ReviewService, private authService: AuthService) {
  }

  createReviewBody(form: NgForm) {
    let review = {
      userId: this.authService.getCurrentUser().id,   
      movieId: 1,
      comment: this.form
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
