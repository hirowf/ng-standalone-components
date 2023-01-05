import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: true,
  template: `
    <h1 class="px-3 py-2  text-2xl font-medium" aria-current="page">
      {{ title }}
    </h1>
  `,
})
export class PageTitle {
  @Input() title = '';
}
