import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { FavouriteService } from 'src/app/@core/services/favourites.service';
import { FavouriteData } from 'src/app/models/favouriteData';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';
import { MoviesService } from 'src/app/@core/services/movies.service';

@Component({
  selector: 'tnv-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  currentUser: Partial<User> = {};

  movieUserIdList: Partial<FavouriteData>[] = [];
  movieList: Partial<MovieData>[] = [];

  constructor(private favoriteService: FavouriteService,
              private authService: AuthService,
              private movieService: MoviesService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.getAllFavorite();
  }

  getAllFavorite() {
    const userId = this.currentUser.id;
    this.favoriteService.getFavouriteList(userId).subscribe({
      next: (res: FavouriteData[]) => {
        this.movieUserIdList = res;

        for (let i = 0; i < this.movieUserIdList.length; i++) {
          let movieId = this.movieUserIdList[i].movieId
          this.movieService.getFavouriteMovie(movieId).subscribe({
            next: (res) => {
              this.movieList[i] = res;

            }
          })
        }
      }
    });
  }

}
