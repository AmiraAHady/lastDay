import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movies/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiK: string = '60509887a38459dc806b6c27954be370';
  constructor(private http: HttpClient) {}

  getAllMovies(lang:string='en-US',page:number=1): Observable<any> {
    console.log(`api =${this.apiK}`);
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiK}&language=${lang}&page=${page}`
    );
  }

  getMovieById(id:number):Observable<any>{
    return this.http.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiK}&language=en-US`);
  }

  searchbyMovieName(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.http.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiK}&language=en-US&page=4`
      );
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=60509887a38459dc806b6c27954be370&language=en-US&page=1&include_adult=false&query=${movieName}`
      );
    }
  }
}
