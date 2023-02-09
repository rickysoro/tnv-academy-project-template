import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/@core/services/movies.service';
import { MovieData } from 'src/app/models/movieData';
import { FavouriteData } from 'src/app/models/favouriteData';
import { AuthService } from 'src/app/@core/services/auth.service';
import { FavouriteService } from 'src/app/@core/services/favourites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tnv-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss']
})
export class FavouriteItemComponent implements OnInit {

  currentUser: Partial<User> = {};

  @Input() movie: Partial<MovieData> = {};
  @Input() favouriteMovieId: Partial<FavouriteData> = {};

  constructor(private authService: AuthService,
              private favouriteService: FavouriteService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm){
    this.favouriteService.deleteFavourite(this.currentUser.id, this.movie.id).subscribe({
      next: (response) => {
        console.log(response );
        window.location.reload();
      }
    });
  }

}
