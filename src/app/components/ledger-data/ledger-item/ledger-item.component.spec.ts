import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerItemComponent } from './ledger-item.component';

describe('LedgerItemComponent', () => {
  let component: LedgerItemComponent;
  let fixture: ComponentFixture<LedgerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
