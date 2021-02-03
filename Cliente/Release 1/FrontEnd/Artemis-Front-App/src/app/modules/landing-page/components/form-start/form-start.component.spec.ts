import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStartComponent } from './form-start.component';

describe('FormStartComponent', () => {
  let component: FormStartComponent;
  let fixture: ComponentFixture<FormStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
