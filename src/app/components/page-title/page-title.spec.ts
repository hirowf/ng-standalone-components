import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTitle } from './page-title.component';

describe('PageTitle', () => {
  let component: PageTitle;
  let fixture: ComponentFixture<PageTitle>;
  let element: { textContent: any };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTitle],
    });

    fixture = TestBed.createComponent(PageTitle);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should display the title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(element.textContent).toContain(component.title);
  });
});
