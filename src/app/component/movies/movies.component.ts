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
  movieObs: Observable<any[]>;
  constructor(private movieService: MovieListService) {
  }

  ngOnInit() {
    this.movieService.getMovieObs().subscribe(m => {
      this.movieArr = m;
    });
  }
}
