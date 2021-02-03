import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesPostComponent } from './opciones-post.component';

describe('OpcionesPostComponent', () => {
  let component: OpcionesPostComponent;
  let fixture: ComponentFixture<OpcionesPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
