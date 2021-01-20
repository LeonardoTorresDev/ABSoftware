import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFinalesComponent } from './detalles-finales.component';

describe('DetallesFinalesComponent', () => {
  let component: DetallesFinalesComponent;
  let fixture: ComponentFixture<DetallesFinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesFinalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
