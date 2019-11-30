import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../tickets.service';
import {Ticket} from '../ticket';

@Component({
  selector: 'mti-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  private tickets: Array<Ticket>;

  constructor(private ticketService: TicketsService) {
    this.tickets = [];
  }

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

}
