import {TestBed} from '@angular/core/testing';

import {TicketsService} from './tickets.service';
import {Ticket} from './ticket';

describe('TicketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketsService = TestBed.get(TicketsService);
    expect(service).toBeTruthy();
  });

  describe('TicketsService.getTickets', () => {

    it('should be available', () => {
      const service: TicketsService = TestBed.get(TicketsService);
      expect(service.getTickets).toBeDefined();
    });

    it('should return an array', () => {
      const service: TicketsService = TestBed.get(TicketsService);
      const dummyTickets = service.getTickets();
      expect(dummyTickets instanceof Array).toBeTruthy();
    });

    it('should return an array consisting of 20 dummy tickets', () => {
      const service: TicketsService = TestBed.get(TicketsService);
      const dummyTickets = service.getTickets();
      expect(dummyTickets.length).toEqual(20);
      expect(dummyTickets[0] instanceof Ticket).toBeTruthy();
    });
  });
});
