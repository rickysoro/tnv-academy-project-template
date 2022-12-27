import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ReviewService } from 'src/app/@core/services/review.service';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  form: string = "Questo film è bellissimo.";

  constructor(private router: Router, private reviewService: ReviewService, private authService: AuthService) { }

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
