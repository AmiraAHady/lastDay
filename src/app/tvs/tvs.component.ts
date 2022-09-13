import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {
   allTvs!:any[]
  constructor(private tvserv:TvService) { }

  ngOnInit(): void {
     this.tvserv.getAllTvShows().subscribe({next:(data)=>{
      this.allTvs=data.results
     }})
  }

}
