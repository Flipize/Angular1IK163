import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AddComponent } from './component/add/add.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ToolbarComponent,
    AddComponent,
    LogInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
