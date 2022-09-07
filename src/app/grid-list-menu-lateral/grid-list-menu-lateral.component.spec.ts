import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListMenuLateralComponent } from './grid-list-menu-lateral.component';

describe('GridListMenuLateralComponent', () => {
  let component: GridListMenuLateralComponent;
  let fixture: ComponentFixture<GridListMenuLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListMenuLateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListMenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
