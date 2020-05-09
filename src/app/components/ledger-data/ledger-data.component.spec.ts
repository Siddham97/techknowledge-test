import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerDataComponent } from './ledger-data.component';

describe('LedgerDataComponent', () => {
  let component: LedgerDataComponent;
  let fixture: ComponentFixture<LedgerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
