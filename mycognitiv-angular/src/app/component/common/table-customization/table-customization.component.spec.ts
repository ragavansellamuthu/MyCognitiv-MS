import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomizationComponent } from './table-customization.component';

describe('TableCustomizationComponent', () => {
  let component: TableCustomizationComponent;
  let fixture: ComponentFixture<TableCustomizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCustomizationComponent]
    });
    fixture = TestBed.createComponent(TableCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
