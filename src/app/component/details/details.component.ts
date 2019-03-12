import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { Movie } from '../../../models/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieListService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);

    this.movieService.getMovieName(name).subscribe(m => this.movie = m);
    }
    getId(): string {
    return this.route.snapshot.paramMap.get('name');
    }
}
