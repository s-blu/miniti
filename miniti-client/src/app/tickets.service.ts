import {Injectable} from '@angular/core';
import {Ticket} from './ticket';
import * as titleData from './dummy-titles.json';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() {
  }

  getTickets() {
    const dummyTickets = [];

    for (let i = 0; i < 20; i++) {
      dummyTickets.push(new Ticket(i, _getDummyTicketTitle()));
    }

    return dummyTickets;

    function _getDummyTicketTitle() {
      return `${_getRandomEntry(titleData.prefix)} ${_getRandomEntry(titleData.adjective)} ${_getRandomEntry(titleData.subject)}`;

      function _getRandomEntry(array) {
        return array[Math.floor(Math.random() * array.length)];
      }
    }
  }
}
