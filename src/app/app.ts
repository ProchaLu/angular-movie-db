import { Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
