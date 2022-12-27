import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-movies-date',
  templateUrl: './movies-date.component.html',
  styleUrls: ['./movies-date.component.scss']
})
export class MoviesDateComponent implements OnInit {
  startDateFilter: string = "";
  endDateFilter: string = "";
  startDate: string = "";
  endDate: string = "";
  isDateFiltered = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.startDate = this.startDateFilter;
    this.endDate = this.endDateFilter;
    if(this.checkDate(this.startDate, this.endDate)){
      this.isDateFiltered = true;
    }
  }

  //Metodo per controllare che le date inserite siano valide
  checkDate(startDate: string, endDate: string): boolean {
    if (startDate == "" || endDate == "") {
      alert("Attenzione! Entrambe le date devono essere inserite.");
      return false;
    }
    var startDateParsed = Date.parse(startDate);
    var endDateParsed = Date.parse(endDate);
    if (endDateParsed < startDateParsed) {
      alert("Attenzione! La data di inizio deve essere precedente alla data di fine!");
      return false;
    }
    return true;
  }
}
