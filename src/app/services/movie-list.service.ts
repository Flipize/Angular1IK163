import { Injectable } from '@angular/core';
import { Movie } from '../../models/Movie';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  movieObs: Observable<any[]>;
  movieDoc: AngularFirestoreDocument<Movie>;
  movieOne: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.movieObs = this.afs.collection('Movies').snapshotChanges().pipe(
      map( m => m.map(
        a => {
          const data = a.payload.doc.data() as Movie;
          const id = a.payload.doc.id;
          return {id, ...data};
        }
      ))
    );
  }

  getMovieObs(): Observable<Movie[]> {
    this.movieObs = this.afs.collection('Movies').snapshotChanges().pipe(
      map( m => m.map(
        a => {
          const data = a.payload.doc.data() as Movie;
          const id = a.payload.doc.id;
          return {id, ...data};
        }
      ))
    );
    return this.movieObs;
  }

  addMovie(m: Movie) {
    this.afs.collection('Movies').add(m);
  }

  getMovieName(id: string): Observable<Movie> {
    this.movieDoc = this.afs.doc<Movie>(`Movies/${id}`);
    this.movieOne = this.movieDoc.valueChanges();

    return this.movieOne;
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
