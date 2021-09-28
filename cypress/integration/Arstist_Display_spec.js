describe('Band Page Display', () => {
  beforeEach(() => {
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
    cy.visit('http://localhost:3000/artists/baroness');
  });
  it('should prove to be true', () => {
    expect(true).to.equal(true);
  });
  it('Should be to visit the page after typing the correct band name', () => {
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
  it('Should be able to view elements on the page', () => {
    cy.get('section.artistInfoContainer').get('h2').contains('Baroness');
    cy.get('section.artistInfoContainer')
      .get('img')
      .should('have.attr', 'src')
      .should('include', '9062513');
    cy.get('section.artistInfoContainer').get('a').should('have.attr', 'href');
    cy.get('section.concertContainer').get('h3').contains('Upcoming Events');
    cy.get('article.concertCard').get('p.artistName').contains('BARONESS');
  });
  it('Should be able to click on a concert card and have it saved for viewing later', () => {
    cy.get('article.concertCard')
      .get('button.attendShowButton')
      .click()
      .get('a.savedEventsButton')
      .click()
      .url()
      .should('include', '/saved_events')
      .get('section.savedConcertContainer')
      .get('h3')
      .contains('Saved Events');
  });
  it('Should be able to navigate back to the landing page by clicking on the app title', () => {
    cy.get('header.navbar')
      .get('h1')
      .click()
      .get('section.welcomeContainer')
      .get('h2')
      .contains('FanBase');
  });
  it('Should be able to navigate to a band page after searching for an artist', () => {
    cy.get('input.searchInput')
      .type('Baroness')
      .get('button.submitButton')
      .click()
      .url()
      .should('include', 'artists/Baroness')
      .get('section.artistInfoContainer')
      .contains('Baroness');
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
});
