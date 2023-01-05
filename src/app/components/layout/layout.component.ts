import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../nav/nav.component';

@Component({
  selector: 'layout',
  standalone: true,
  template: `
    <div class="min-h-full">
      <app-nav></app-nav>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <router-outlet></router-outlet>
          </div>
        </div>
      </main>
    </div>
  `,
  imports: [Nav, RouterOutlet],
})
export class Layout {}
