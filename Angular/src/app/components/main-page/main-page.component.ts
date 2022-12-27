import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  filmItems: MovieData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
