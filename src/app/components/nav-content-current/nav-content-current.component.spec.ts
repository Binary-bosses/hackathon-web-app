import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContentCurrentComponent } from './nav-content-current.component';

describe('NavContentCurrentComponent', () => {
  let component: NavContentCurrentComponent;
  let fixture: ComponentFixture<NavContentCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContentCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContentCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
