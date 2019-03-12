import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { Movie } from '../../../models/Movie';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie;
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute, private movieService: MovieListService, private Aservice: AuthService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);

    this.movieService.getMovieName(name).subscribe(m => this.movie = m);

    this.Aservice.getAuth().subscribe(auth => {
      this.isLoggedIn = !!auth;
    });
    }
    getId(): string {
    return this.route.snapshot.paramMap.get('name');
    }
}
