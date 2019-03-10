import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';
import {Observable, of} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  movieObs: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    /*this.movieObs = [
      new Movie('Titanic', 1998, 'Steven Spielberg'),
      new Movie('2 Guys One Cup', 2002, 'Michael Beigart')
    ];
    */
  }

  getMovieObs(): Observable<Movie[]> {
    this.movieObs = this.afs.collection('Movies').valueChanges();
    return this.movieObs;
  }

  addMovie(m: Movie) {
    this.afs.collection('Movies').add(m);
  }
  // Databaskoppling
  /* movie: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.movie = afs.collection('Movies').valueChanges();
  }
  getMovie(): Observable<Movie[]> {
    return this.movie;
  }*/
}
