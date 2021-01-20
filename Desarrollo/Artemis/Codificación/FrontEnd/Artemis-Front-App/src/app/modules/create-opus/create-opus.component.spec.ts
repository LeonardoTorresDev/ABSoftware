import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpusComponent } from './create-opus.component';

describe('CreateOpusComponent', () => {
  let component: CreateOpusComponent;
  let fixture: ComponentFixture<CreateOpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOpusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
