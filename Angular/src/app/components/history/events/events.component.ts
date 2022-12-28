import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HistoryEventsService } from 'src/app/@core/services/history-events.service';
import { HistoryEvents } from 'src/app/models/historyEvent';

@Component({
  selector: 'tnv-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnChanges {
  events: Partial<HistoryEvents>[] = [];
  responsiveOptions;

  @Input() event: Partial<HistoryEvents> = {};

  constructor(private historyEventsService: HistoryEventsService) { 
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
  }

}
