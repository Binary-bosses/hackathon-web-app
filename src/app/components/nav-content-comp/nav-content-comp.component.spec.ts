import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContentCompComponent } from './nav-content-comp.component';

describe('NavContentCompComponent', () => {
  let component: NavContentCompComponent;
  let fixture: ComponentFixture<NavContentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
