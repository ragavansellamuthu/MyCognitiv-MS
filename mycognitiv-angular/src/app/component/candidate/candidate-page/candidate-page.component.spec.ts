import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePageComponent } from './candidate-page.component';

describe('CandidatePageComponent', () => {
  let component: CandidatePageComponent;
  let fixture: ComponentFixture<CandidatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatePageComponent]
    });
    fixture = TestBed.createComponent(CandidatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
