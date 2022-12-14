import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-movie-history-section',
  templateUrl: './movie-history-section.component.html',
  styleUrls: ['./movie-history-section.component.scss']
})
export class MovieHistorySectionComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
