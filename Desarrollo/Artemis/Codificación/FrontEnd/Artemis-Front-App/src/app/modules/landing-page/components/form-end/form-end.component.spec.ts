import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEndComponent } from './form-end.component';

describe('FormEndComponent', () => {
  let component: FormEndComponent;
  let fixture: ComponentFixture<FormEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
