import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLanguage } from './switch-language';

describe('SwitchLanguage', () => {
  let component: SwitchLanguage;
  let fixture: ComponentFixture<SwitchLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
