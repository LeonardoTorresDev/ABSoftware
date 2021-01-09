import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarColaboradorComponent } from './agregar-colaborador.component';

describe('AgregarColaboradorComponent', () => {
  let component: AgregarColaboradorComponent;
  let fixture: ComponentFixture<AgregarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
