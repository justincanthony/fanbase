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
    cy.get('div.searchBar').find('input.searchInput');
    cy.get('div.logoWrapper').contains('FanBase');
    cy.get('section.welcomeContainer')
      .get('h3')
      .contains('Connecting Fans to Bands');
  });
  it('Should be able to capture value in the search input', () => {
    cy.get('input.searchInput')
      .type('Baroness')
      .should('have.value', 'Baroness');
  });
  it('Should be able to navigate to a band page after searching for an artist', () => {
    cy.intercept(
      'GET',
      'https://rest.bandsintown.com/artists/baroness/?app_id=888501139bcf6b4a81fec1c338f31325',
      {
        name: 'Baroness',
        facebook_page_url: 'https://m.facebook.com/YourBaroness/?_rdr',
        url: 'https://www.bandsintown.com/a/13813?came_from=267&app_id=888501139bcf6b4a81fec1c338f31325',
        image_url: 'https://photos.bandsintown.com/large/9062513.jpeg',
      }
    );
    cy.visit('http://localhost:3000');
    cy.get('input.searchInput')
      .type('Baroness')
      .get('button.submitButton')
      .click()
      .url()
      .should('include', 'artists/Baroness')
      .get('section.artistInfoContainer')
      .contains('Baroness');
  });
  it('Should be able to click on the view saved events button and view any concerts that have been saved', () => {
    cy.get('a.savedEventsButton')
      .click()
      .url()
      .should('include', '/saved_events');
  });
  it('Should display an error message if user searches for an artist that does not exist', () => {
    cy.get('input.searchInput')
      .type('Barortggrs')
      .get('button.submitButton')
      .click()
      .get('section.concertContainer')
      .get('div.errorDisplay')
      .get('h3')
      .contains('There are no results for this artist');
  });
  it('Should should display an error page if the user types in a bad url path', () => {
    cy.visit('http://localhost:3000/nopeidontexist');
    cy.get('div.errorDisplay').get('h3').contains('Page Not Found');
  });
});
