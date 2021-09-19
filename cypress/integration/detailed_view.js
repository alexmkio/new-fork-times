describe('Dashboard View', () => {

  beforeEach(() => {
    cy.loadDetails()
  });

  it('The page should have a header', () => {
    cy.get('h1').contains('New Fork Times')
  })

});