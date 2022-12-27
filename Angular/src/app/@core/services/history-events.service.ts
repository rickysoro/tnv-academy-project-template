import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HideModifier } from '@popperjs/core/lib/modifiers/hide';
import { HistoryEvents } from 'src/app/models/historyEvent';

@Injectable({
  providedIn: 'root'
})
export class HistoryEventsService {
  url = 'https://api.api-ninjas.com/v1/historicalevents?text=';
  apiKey = `ArLzwVWQWBXNkPQVZvg0Gg==cQcappSk6FOqtkYF`;

  httpHeaders : HttpHeaders = new HttpHeaders({
    'X-Api-Key': 'HEPf1fkE8Jxa81Sley8K1Q==rvnX1ZNOLMWspa90'
  });

  constructor(private http: HttpClient) { }

  getEventByYear(releaseDate: any) {
    return  this.http.get<HistoryEvents>
    (this.url, {params: { year: releaseDate.year, month: releaseDate.month}, headers: this.httpHeaders});
  }
}
