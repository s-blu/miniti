import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketEntryComponent} from './ticket-entry.component';
import {Ticket} from '../ticket';

describe('TicketEntryComponent', () => {
  let component: TicketEntryComponent;
  let fixture: ComponentFixture<TicketEntryComponent>;
  const mockId = '15';
  const mockTitle = 'MockTicket Banana';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketEntryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEntryComponent);
    component = fixture.componentInstance;
    component.ticket = new Ticket(mockId, mockTitle);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display id and title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.id').textContent).toContain(mockId);
    expect(compiled.querySelector('.title').textContent).toContain(mockTitle);
  });
});
