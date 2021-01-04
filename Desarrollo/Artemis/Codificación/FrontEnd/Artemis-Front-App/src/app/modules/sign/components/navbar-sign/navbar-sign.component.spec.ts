import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSignComponent } from './navbar-sign.component';

describe('NavbarSignComponent', () => {
  let component: NavbarSignComponent;
  let fixture: ComponentFixture<NavbarSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
