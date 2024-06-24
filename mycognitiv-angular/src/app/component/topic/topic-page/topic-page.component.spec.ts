import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPageComponent } from './topic-page.component';

describe('TopicPageComponent', () => {
  let component: TopicPageComponent;
  let fixture: ComponentFixture<TopicPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicPageComponent]
    });
    fixture = TestBed.createComponent(TopicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
