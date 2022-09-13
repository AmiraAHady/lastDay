import { Component } from '@angular/core';
//decorator
@Component({
  //component directive
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<p>hi</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  websiteDiscription:string='IMDb is the world\'s most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.'

  sayHello():void{
    console.log('hi from class');
    
  }
}
