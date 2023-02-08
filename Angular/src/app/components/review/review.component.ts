import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ReviewService } from 'src/app/@core/services/review.service';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  movieId: number;
  comment: string = "";

  constructor(private activatedRoute: ActivatedRoute, private reviewService: ReviewService, private authService: AuthService) { 
    this.movieId = this.activatedRoute.snapshot.params['movieId'];
  }

  createReviewBody(form: NgForm) {
    let reviewComment = JSON.stringify(form)
    let obj = JSON.parse(reviewComment)
    let review = {
      userId: this.authService.getCurrentUser().id,
      movieId: this.movieId,
      comment: obj.review
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
