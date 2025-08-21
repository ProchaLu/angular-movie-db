import { Component, signal } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
