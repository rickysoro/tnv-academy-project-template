export interface HistoryEvents {
    year: number;
    month: number;
    day: number;
    event: string;
    
  }

  export interface HistoryEventsResponseDTO {
    page: number;
    results: HistoryEvents[];
  }