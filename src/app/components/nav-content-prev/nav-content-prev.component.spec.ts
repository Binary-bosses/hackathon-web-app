import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContentPrevComponent } from './nav-content-prev.component';

describe('NavContentPrevComponent', () => {
  let component: NavContentPrevComponent;
  let fixture: ComponentFixture<NavContentPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContentPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContentPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
