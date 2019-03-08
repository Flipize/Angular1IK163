import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  movieArr: Movie[];

  constructor() {
    this.movieArr = [
      new Movie('Titanic', 1998, 'Steven Spielberg'),
      new Movie('2 Guys One Cup', 2002, 'Michael Beigart')
    ];
  }

  getMovieArr(): Observable<Movie[]> {
    return of(this.movieArr);
  }

  addMovieArr(m: Movie) {
    this.movieArr.push(m);
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
