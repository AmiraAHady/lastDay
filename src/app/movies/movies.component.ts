import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  hamada: boolean = false;
  length!: number;
  lang: string = 'en-Us';
  currentPage!: number;
  // isVisable: boolean = false;
  private _search: string = '';
  pageSize:number=20
  allMovies: any[] = [];
  filteredMovies: any[] = [];

  constructor(public movsserv: MoviesService) {}

  ngOnInit(): void {
    this.movsserv.getAllMovies().subscribe({
      next: (movsData) => {
        this.length = movsData.total_pages;
        this.allMovies = movsData.results;
        this.filteredMovies = this.allMovies;
      },
    });
  }

  get search(): string {
    return this._search;
  }

  set search(val: string) {
    this._search = val;
    this.searchMovies(val);
  }

  sayHello(): void {
    alert('hello');
  }

  toggleDiscription(movieId: number): void {
    this.allMovies.forEach(function (movie) {
      if (movie.id == movieId) {
        movie.isVisable = !movie.isVisable;
        console.log(movie);
      }
      
    });
  }

  searchMovies(value: string) {
    this.movsserv.searchbyMovieName(value).subscribe({
      next: (data) => {
        this.filteredMovies = data.results;
      },
    });
    // return this.allMovies.filter((mov)=>
    //     mov.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    // )
  }

  messageFromChild(data: string) {
    console.log(data);
  }
  toggleLang(): void {
    this.lang = this.lang == 'en-US' ? 'ar-SA' : 'en-US';
    this.movsserv.getAllMovies(this.lang).subscribe({
      next: (movsData) => {
        this.allMovies = movsData.results;
        this.filteredMovies = this.allMovies;
      },
    });
  }

  onPageChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.movsserv.getAllMovies(this.lang, this.currentPage).subscribe({
      next: (movsData) => {
        this.allMovies = movsData.results;
        this.filteredMovies = this.allMovies;
      },
    });
  }
}
