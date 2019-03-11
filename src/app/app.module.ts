import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AddComponent } from './component/add/add.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NotFoundComponent } from './component/not-found/not-found-component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ToolbarComponent,
    AddComponent,
    LogInComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
