import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraObraComponent } from './cabecera-obra.component';

describe('CabeceraObraComponent', () => {
  let component: CabeceraObraComponent;
  let fixture: ComponentFixture<CabeceraObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
