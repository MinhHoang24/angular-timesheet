import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarHeader } from './left-sidebar-header';

describe('LeftSidebarHeader', () => {
  let component: LeftSidebarHeader;
  let fixture: ComponentFixture<LeftSidebarHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidebarHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
