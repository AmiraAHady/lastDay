import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TvsComponent } from './tvs/tvs.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'tvs',component:TvsComponent},
  {path:'animations',component:AnimationsComponent},
  {path:'movies/:id',component:MovieDetailsComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
