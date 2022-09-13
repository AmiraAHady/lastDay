import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!:any
  isLoading:boolean=true;
  constructor(private route:ActivatedRoute,private movservs:MoviesService) { }

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'))
    this.movservs.getMovieById(id).subscribe({next:(movieData)=>{
        this.movie=movieData;
        this.isLoading=false;
    }})
  }

}
