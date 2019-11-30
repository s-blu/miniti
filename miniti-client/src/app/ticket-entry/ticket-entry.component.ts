import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../ticket';

@Component({
  selector: 'mti-ticket-entry',
  templateUrl: './ticket-entry.component.html',
  styleUrls: ['./ticket-entry.component.scss']
})
export class TicketEntryComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor() {
  }

  ngOnInit() {
  }

}
