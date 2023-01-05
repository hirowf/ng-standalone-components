import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <h1 class="text-3xl font-bold underline bg-black text-white">
        Angular Standalone Starter 🌊

        {{ title }}
      </h1>
    </div>
  `,
})
export class AppComponent {
  title = 'angular-standalone-starter';
}
