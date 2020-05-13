import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeBarChartComponent } from './range-bar-chart.component';

describe('RangeBarChartComponent', () => {
  let component: RangeBarChartComponent;
  let fixture: ComponentFixture<RangeBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
