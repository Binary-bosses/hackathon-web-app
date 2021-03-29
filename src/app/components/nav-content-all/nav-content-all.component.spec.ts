import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContentAllComponent } from './nav-content-all.component';

describe('NavContentAllComponent', () => {
  let component: NavContentAllComponent;
  let fixture: ComponentFixture<NavContentAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContentAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
