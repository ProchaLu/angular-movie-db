import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section.component';
import { MovieDetailComponent } from './movie-detail.component';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];
