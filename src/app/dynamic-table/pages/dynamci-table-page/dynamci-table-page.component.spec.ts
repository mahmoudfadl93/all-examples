import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamciTablePageComponent } from './dynamci-table-page.component';

describe('DynamciTablePageComponent', () => {
  let component: DynamciTablePageComponent;
  let fixture: ComponentFixture<DynamciTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamciTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamciTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
