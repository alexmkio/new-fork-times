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
  
  it('The first article card should be by Travis Rollins', () => {
    cy.get('.card').eq(0).children('dl').children('dd').eq(0).contains('Article #1')
  })
  
  it('The last article card should be by Taylor Want', () => {
    cy.get('.card').eq(2).children('dl').children('dd').eq(0).contains('Article #3')
  })
  
  it('There should be a sort button that sorts the article cards by their last updated date (in descending order)', () => {
    cy.get('button').click()
    cy.get('.card').eq(0).children('dl').children('dd').eq(0).contains('Article #3')
    cy.get('.card').eq(2).children('dl').children('dd').eq(0).contains('Article #1')
  })
  
  it('Once the articles are sorted the user should no longer see the sort button', () => {
    cy.get('button').click()
    cy.get('button').should('have.length', 0)
  })
  
  // it('Clicking on a card should take the user to a detailed page for that article', () => {
  // })

})