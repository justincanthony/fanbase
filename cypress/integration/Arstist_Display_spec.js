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
    cy.visit('http://localhost:3000');
  });
  it('should prove to be true', () => {
    expect(true).to.equal(true);
  });
});
