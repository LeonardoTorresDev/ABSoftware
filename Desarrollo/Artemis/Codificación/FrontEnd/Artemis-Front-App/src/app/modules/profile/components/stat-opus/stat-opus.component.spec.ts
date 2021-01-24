import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatOpusComponent } from './stat-opus.component';

describe('StatOpusComponent', () => {
  let component: StatOpusComponent;
  let fixture: ComponentFixture<StatOpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatOpusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatOpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
