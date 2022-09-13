import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvsComponent } from './tvs/tvs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimationsComponent } from './animations/animations.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    StarComponent,
    TvsComponent,
    PageNotFoundComponent,
    AnimationsComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
