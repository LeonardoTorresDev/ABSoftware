import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraVersionComponent } from './primera-version.component';

describe('PrimeraVersionComponent', () => {
  let component: PrimeraVersionComponent;
  let fixture: ComponentFixture<PrimeraVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
