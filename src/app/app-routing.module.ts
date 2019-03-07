import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './component/movies/movies.component';
import {AddComponent} from './component/add/add.component';
import {LogInComponent} from './component/log-in/log-in.component';
import {HomeComponent} from './component/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LogInComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
