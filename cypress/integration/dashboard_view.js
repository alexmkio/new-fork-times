describe('Dashboard View', () => {

  beforeEach(() => {
    cy.loadHome()
  })

  it('The page should have a header', () => {
    cy.get('h1').contains('New Fork Times')
  })
  
  it('The page should have three article cards', () => {
    cy.get('.card').should('have.length', 3)
  })
  
  // it('The first article card should be by Travis Rollins', () => {
  // })
  
  // it('The last article card should be by Taylor Want', () => {
  // })
  
  // it('There should be a sort button that sorts the article cards by their last updated date (in descending order)', () => {
  // })
  
  // it('Once the articles are sorted the user should no longer see the sort button', () => {
  // })
  
  // it('Clicking on a card should take the user to a detailed page for that article', () => {
  // })

})