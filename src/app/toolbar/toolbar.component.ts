import { Component, OnInit } from '@angular/core';
import {Movie } from '../../modules/Movie';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
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
