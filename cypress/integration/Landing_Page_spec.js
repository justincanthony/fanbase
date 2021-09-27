import { toast } from 'react-toastify';

describe('Application Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('True should prove to be true', () => {
    expect(true).to.equal(true);
  });
  it('Should be able to visit the page', () => {
    cy.url().should('include', 'localhost:3000');
  });
  it('Should be able to see elements on the page', () => {
    cy.get('h1').contains('FanBase');
  });
});
