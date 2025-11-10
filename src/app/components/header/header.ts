import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div>
      <ul class="flex space-x-3 justify-end m-5 items-center">
        <li>
          <a [routerLink]="'/'" class="hover:text-white/60 transition">Home</a>
        </li>
        <li>
          <a [routerLink]="'/personas'" class="hover:text-white/60 transition">Personas</a>
        </li>
      </ul>
    </div>
  `,
})
export class Header {}
