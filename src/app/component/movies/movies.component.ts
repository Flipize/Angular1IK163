import { Component, OnInit } from '@angular/core';
import { Movie} from '../../../models/Movie';
import {MovieListService} from '../../services/movie-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieArr: Movie[];
  movie: Observable<any[]>;
  constructor(private movieService: MovieListService) {
  }

  ngOnInit() {
    this.movieService.getMovieArr().subscribe(m => {
      this.movieArr = m;
    });
  }
}
