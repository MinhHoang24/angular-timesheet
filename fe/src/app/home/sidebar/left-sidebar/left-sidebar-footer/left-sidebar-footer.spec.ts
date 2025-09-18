import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarFooter } from './left-sidebar-footer';

describe('LeftSidebarFooter', () => {
  let component: LeftSidebarFooter;
  let fixture: ComponentFixture<LeftSidebarFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidebarFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
