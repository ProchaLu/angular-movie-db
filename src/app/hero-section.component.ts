import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  items: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getLatestMovies().subscribe((data) => {
      this.items = data;
    });
  }
}
