import { Component, OnInit } from '@angular/core';
import { HistoryEventsService } from 'src/app/@core/services/history-events.service';
import { MoviesService } from 'src/app/@core/services/movies.service';


@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  nowPlaying: any;
  popularMovies: any;
  loader = true;
  year: any;

  constructor(private moviesService: MoviesService, private historyService: HistoryEventsService) {
    this.moviesService.getPopular(1).subscribe({
      next:(response)=>{console.log(response)
      this.popularMovies = response}
    })
  }

  ngOnInit() : void {
  }
}
