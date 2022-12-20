import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HideModifier } from '@popperjs/core/lib/modifiers/hide';
import { HistoricalEvent } from 'src/app/models/historicalEvent';

@Injectable({
  providedIn: 'root'
})
export class HistoryEventsService {
  url = 'https://api.api-ninjas.com/v1/historicalevents?text=';
  apiKey = `ArLzwVWQWBXNkPQVZvg0Gg==cQcappSk6FOqtkYF`;

  constructor(private http: HttpClient) {

  }

  getEventsByYear(year: number): Observable<any> {
    return this.http.get(`${this.url}history/${year}?api_key=${this.apiKey}`);
  }

  getAllEvents() {
    return this.http.get<HistoricalEvent[]>(`${this.url}/events`);
  }
}
