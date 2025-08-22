import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  movie: any;
  loading = true;
  error = false;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.sub = this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.loading = true;
          this.error = false;
          const id = params.get('id');
          return id ? this.movieService.getMovieById(id) : [];
        })
      )
      .subscribe({
        next: (data) => {
          this.movie = data;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        },
      });
  }
}
