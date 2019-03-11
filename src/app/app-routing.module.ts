import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from './component/movies/movies.component';
import {AddComponent} from './component/add/add.component';
import {LogInComponent} from './component/log-in/log-in.component';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {HomeComponent} from './component/home/home.component';
import {NotFoundComponent} from './component/not-found/not-found-component';

const routes: Routes = [
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LogInComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
