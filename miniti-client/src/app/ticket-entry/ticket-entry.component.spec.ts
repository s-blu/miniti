import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEntryComponent } from './ticket-entry.component';

describe('TicketEntryComponent', () => {
  let component: TicketEntryComponent;
  let fixture: ComponentFixture<TicketEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
