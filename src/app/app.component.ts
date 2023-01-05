import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <router-outlet></router-outlet> `,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'angular-standalone-starter';
}
