import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  apiK: string = '60509887a38459dc806b6c27954be370';
  constructor(private http:HttpClient) { }

  getAllTvShows():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiK}&language=en-US&page=1`)
  }
}
