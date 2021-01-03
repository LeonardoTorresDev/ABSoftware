import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherNetworksComponent } from './other-networks.component';

describe('OtherNetworksComponent', () => {
  let component: OtherNetworksComponent;
  let fixture: ComponentFixture<OtherNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherNetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
