import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HistoryEventsService } from 'src/app/@core/services/history-events.service';
import { MoviesService } from 'src/app/@core/services/movies.service';
import { MovieData } from 'src/app/models/movieData';
import { HistoryEvents } from 'src/app/models/historyEvent';
import { FavouriteService } from 'src/app/@core/services/favourite.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'tnv-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {
  responsiveOptions;
  nowPlaying: Partial<MovieData>[] = [];
  events: any = [];
  currentUser: Partial<User> = {};

  @Input() startDateFilter: string = "";
  @Input() endDateFilter: string = "";
  @Input() movie: Partial<MovieData> = {};
  @Input() event: Partial<HistoryEvents> = {};

  constructor(private movieService: MoviesService,
              private historyEventsService: HistoryEventsService,
              private favouriteService: FavouriteService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.movieService.getMovieByDateRange(this.startDateFilter, this.endDateFilter).subscribe(
      res => {
        this.nowPlaying = res.results.slice(0, 10);
        console.log(this.nowPlaying);
      })
  }

  onSubmit(form: NgForm) {
    this.favouriteService.createFavourite({
      userId: this.currentUser.id, movieId: this.movie.id, event: this.event.event}).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  getEventByYear(release_date: string){
    console.log(release_date)
    const year = release_date.split("-")[0]
    const month = release_date.split("-")[1]
    console.log(year, month)
   
    this.historyEventsService.getEventByYear({year, month}).subscribe(
      
    res => {
      this.events = res;
      console.log(res);
    })
  }
}
