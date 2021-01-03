import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlelcomingComponent } from './wlelcoming.component';

describe('WlelcomingComponent', () => {
  let component: WlelcomingComponent;
  let fixture: ComponentFixture<WlelcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlelcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlelcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
