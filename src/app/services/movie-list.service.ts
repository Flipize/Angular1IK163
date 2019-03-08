import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';

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

  getMovieArr(): Movie[] {
    return this.movieArr;
  }
}
