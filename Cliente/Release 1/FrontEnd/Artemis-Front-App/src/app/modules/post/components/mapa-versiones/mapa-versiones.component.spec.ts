import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaVersionesComponent } from './mapa-versiones.component';

describe('MapaVersionesComponent', () => {
  let component: MapaVersionesComponent;
  let fixture: ComponentFixture<MapaVersionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaVersionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
