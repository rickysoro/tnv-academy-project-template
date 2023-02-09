import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavouriteData } from 'src/app/models/favouriteData';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  nodeUrl: string = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) { }


  createFavourite(favourite: Partial<FavouriteData>){
    return this.httpClient.post<FavouriteData>(`${this.nodeUrl}/favourite`, favourite);
  }

  getFavourite(userId: number, movieId: number){
    return this.httpClient.get<FavouriteData>(`${this.nodeUrl}/favourite/${userId}/${movieId}`);
  }

  getFavouriteList(userId: number| undefined){
    return this.httpClient.get<FavouriteData[]>(`${this.nodeUrl}/favourite/${userId}`);
  }

  getAllFavourites(){
    return this.httpClient.get<FavouriteData[]>(`${this.nodeUrl}/`);
  }

  deleteFavourite(userId: number | undefined, movieId: number | undefined) {
    return this.httpClient.delete(`${this.nodeUrl}/favourite/${userId}/${movieId}`);
  }

}
