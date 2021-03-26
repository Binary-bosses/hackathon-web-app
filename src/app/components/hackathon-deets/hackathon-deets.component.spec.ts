import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonDeetsComponent } from './hackathon-deets.component';

describe('HackathonDeetsComponent', () => {
  let component: HackathonDeetsComponent;
  let fixture: ComponentFixture<HackathonDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
