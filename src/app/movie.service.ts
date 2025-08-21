import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiKey = environment.apiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getLatestMovies(): Observable<any[]> {
    return this.http
      .get<any>(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
      .pipe(map((response) => response.results.slice(0, 20)));
  }
}
