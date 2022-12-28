import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HistoryEventsService } from 'src/app/@core/services/history-events.service';
import { MoviesService } from 'src/app/@core/services/movies.service';
import { MovieData } from 'src/app/models/movieData';
import { HistoryEvents } from 'src/app/models/historyEvent';

@Component({
  selector: 'tnv-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {
  movieId: number;
  backdrops: any = [];
  responsiveOptions;
  movie: Partial<MovieData> = {};
  events: any = [];
  nowPlaying: Partial<MovieData>[] = [];

  @Input() startDateFilter: string = "";
  @Input() endDateFilter: string = "";
  @Input() event: Partial<HistoryEvents> = {};

  constructor(private router: ActivatedRoute, private movieService: MoviesService, private historyEventsService: HistoryEventsService) {
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
    this.movieId = this.router.snapshot.params['movieId'];
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (response) => {
        this.movie = response
        console.log(response)
      }
    })
  }

  ngOnChanges(): void {
    this.movieService.getMovieByDateRange(this.startDateFilter, this.endDateFilter).subscribe(
      res => {
        this.nowPlaying = res.results.slice(0, 10);
        console.log(this.nowPlaying);
      })
  }

  getEventByYear(release_date: string | undefined) {
    console.log(release_date!)
    const year = release_date!.split("-")[0]
    const month = release_date!.split("-")[1]
    console.log(year, month)

    this.historyEventsService.getEventByYear({ year, month }).subscribe(
      res => {
        this.events = res;
        console.log(res);
      })
  }
}
