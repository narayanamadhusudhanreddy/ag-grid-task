import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAgComponent } from './dynamic-ag.component';

describe('DynamicAgComponent', () => {
  let component: DynamicAgComponent;
  let fixture: ComponentFixture<DynamicAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
