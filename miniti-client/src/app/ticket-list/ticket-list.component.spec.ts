import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketListComponent} from './ticket-list.component';
import {TicketEntryComponent} from '../ticket-entry/ticket-entry.component';
import {Ticket} from '../ticket';
import {TicketsService} from '../tickets.service';
import {By} from '@angular/platform-browser';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketListComponent, TicketEntryComponent],
      providers: [TicketsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;

    // mock TicketService.getTickets
    const testTicketsArray = [
      new Ticket('1', '1'),
      new Ticket('2', '2'),
      new Ticket('3', '3'),
      new Ticket('4', '4'),
    ];
    const ticketsService = fixture.debugElement.injector.get(TicketsService);
    spyOn(ticketsService, 'getTickets').and.returnValue(testTicketsArray);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all four tickets', () => {
    const compiled = fixture.debugElement;

    expect(compiled.queryAll(By.css('mti-ticket-entry')).length).toEqual(4);
  });
});
