import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/@core/services/review.service';
import { ReviewDTO } from 'src/app/models/review';

@Component({
  selector: 'tnv-movie-history',
  templateUrl: './movie-history.component.html',
  styleUrls: ['./movie-history.component.scss']
})
export class MovieHistoryComponent implements OnInit {

  constructor(private router: Router, private reviewService: ReviewService) {
  }

  comment: string = "Film molto interessante, sceneggiatura avvincente e fotografia di alto livello.";

  createReviewBody(comment: string) {
    let review = {
      userId: 1,
      movieId: 1,
      comment: this.comment
    }
    return review;
  }

  insertReview(form: NgForm) {
    let review = this.createReviewBody(form.value.comment);
    console.log(form) 
    this.reviewService.createReview(review).subscribe({
      next: () => { console.log(review); }
    }); 
  }

  ngOnInit(): void {
  }
}
