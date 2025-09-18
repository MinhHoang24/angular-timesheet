import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarNav } from './left-sidebar-nav';

describe('LeftSidebarNav', () => {
  let component: LeftSidebarNav;
  let fixture: ComponentFixture<LeftSidebarNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidebarNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
