import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamciTableComponent } from './dynamci-table.component';

describe('DynamciTableComponent', () => {
  let component: DynamciTableComponent;
  let fixture: ComponentFixture<DynamciTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamciTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamciTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
