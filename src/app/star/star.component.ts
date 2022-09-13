import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating!: number;
  @Output()  prodCast:EventEmitter<string>=new EventEmitter<string>()
  clipWidth: number = 75;
  
  constructor( private movsService:MoviesService) {
  }
  ngOnChanges() {
    this.clipWidth = (this.rating * 75) / 5;
  }

  onProdCast(){
    this.prodCast.emit(`you clicked movie with rating ${this.rating}`)
  }
}
