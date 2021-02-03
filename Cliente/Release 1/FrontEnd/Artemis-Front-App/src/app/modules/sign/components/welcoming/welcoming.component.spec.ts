import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingComponent } from './welcoming.component';

describe('WelcomingComponent', () => {
  let component: WelcomingComponent;
  let fixture: ComponentFixture<WelcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
