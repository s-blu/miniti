import {Ticket} from './ticket';

describe('Ticket', () => {
  it('should create an instance', () => {
    expect(new Ticket(null, null)).toBeTruthy();
  });

  it('should take an id and a title', () => {
    const testId = '12';
    const testTitle = 'test title for ticket';

    const ticket = new Ticket(testId, testTitle);

    expect(ticket.id).toEqual(testId);
    expect(ticket.title).toEqual(testTitle);
  });
});
