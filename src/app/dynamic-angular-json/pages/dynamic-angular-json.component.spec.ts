import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAngularJsonComponent } from './dynamic-angular-json.component';

describe('DynamicAngularJsonComponent', () => {
  let component: DynamicAngularJsonComponent;
  let fixture: ComponentFixture<DynamicAngularJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAngularJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAngularJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
