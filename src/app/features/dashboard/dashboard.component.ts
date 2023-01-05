import { Component } from '@angular/core';
import { PageTitle } from 'src/app/components/page-title/page-title.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  template: ` <page-title title="Dashboard"></page-title> `,
  imports: [PageTitle],
})
export class Dashboard {}
