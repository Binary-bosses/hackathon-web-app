import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackPageComponent } from './hack-page.component';

describe('HackPageComponent', () => {
  let component: HackPageComponent;
  let fixture: ComponentFixture<HackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
