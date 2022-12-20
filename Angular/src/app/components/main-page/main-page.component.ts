import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'tnv-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  filmItems: Film[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
