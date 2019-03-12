import {Component, OnInit, ViewChild} from '@angular/core';
import {Movie} from '../../../models/Movie';
import {NgForm} from '@angular/forms';
import {MovieListService} from '../../services/movie-list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movieArr: Movie[];
  newMovie: Movie = {
    Name: '',
    Year: null,
    Director: '',
  };
  @ViewChild ('movieForm') theForm: NgForm;

  constructor( private movieService: MovieListService) { }

  ngOnInit() {
    this.movieService.getMovieObs().subscribe(m => {
      this.movieArr = m;
    });
  }


  onSubmit({value, valid}: {value: Movie, valid: boolean}) {
    if (!valid) {
      console.log('not valid');
    } else {
      this.movieService.addMovie(value);
      this.theForm.reset();
    }
  }
}
