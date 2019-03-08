import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {AddComponent} from './add/add.component';
import {LogInComponent} from './log-in/log-in.component';
import {ToolbarComponent} from './toolbar/toolbar.component';

const routes: Routes = [
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'add', component: AddComponent},
  {path: 'log-in', component: LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
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
>>>>>>> origin/master
})
export class AppRoutingModule { }
