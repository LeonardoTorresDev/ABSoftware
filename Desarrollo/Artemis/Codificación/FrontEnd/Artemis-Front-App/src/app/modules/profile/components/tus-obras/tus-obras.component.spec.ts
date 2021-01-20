import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusObrasComponent } from './tus-obras.component';

describe('TusObrasComponent', () => {
  let component: TusObrasComponent;
  let fixture: ComponentFixture<TusObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusObrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
