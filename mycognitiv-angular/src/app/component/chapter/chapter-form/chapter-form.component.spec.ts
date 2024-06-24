import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFormComponent } from './chapter-form.component';

describe('ChapterFormComponent', () => {
  let component: ChapterFormComponent;
  let fixture: ComponentFixture<ChapterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterFormComponent]
    });
    fixture = TestBed.createComponent(ChapterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
