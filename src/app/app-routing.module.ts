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
import {ToolbarComponent} from './toolbar/toolbar.component';

const routes: Routes = [
  {path: '', component: ToolbarComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
>>>>>>> origin/master
})
export class AppRoutingModule { }
