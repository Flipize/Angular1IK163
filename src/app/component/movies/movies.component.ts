import { Component, OnInit } from '@angular/core';
import { Movie} from '../../../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public DieHard: Movie;

  constructor() {
    this.DieHard = new Movie();
    this.DieHard.Name = 'Die Hard';
    this.DieHard.Year = 1990;
    this.DieHard.Director = 'Karl Kung den XVI';
  }

  ngOnInit() {
  }

}
