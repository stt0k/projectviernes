import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <div class="container mx-auto mt-10">
      <app-header />
      <router-outlet />
    </div>
  `,
})
export class App {
  protected readonly title = signal('projectviernes');
}
