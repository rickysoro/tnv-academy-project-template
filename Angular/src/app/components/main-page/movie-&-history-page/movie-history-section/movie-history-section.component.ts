import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { MovieHistoryItemmComponent } from '../movie-history-itemm/movie-history-itemm.component';

@Component({
  selector: 'tnv-movie-history-section',
  templateUrl: './movie-history-section.component.html',
  styleUrls: ['./movie-history-section.component.scss']
})
export class MovieHistorySectionComponent implements OnInit {

  @Input() title: string = '';
  @Input() movies: Film[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
