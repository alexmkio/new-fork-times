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

  it('The articles should be sorted by published date in descending order by default', () => {
    cy.get('.card').eq(0).children('dl').children('dd').eq(0).contains('Article #1')
    cy.get('.card').eq(2).children('dl').children('dd').eq(0).contains('Article #3')
  })

  it('There is a dropdown with sort options', () => {
    cy.get('select').select('Published - ascending').should('have.value', 'pubAsc')
      .get('select').select('Published - descending').should('have.value', 'pubDesc')
      .get('select').select('Updated - ascending').should('have.value', 'upAsc')
      .get('select').select('Updated - descending').should('have.value', 'upDesc')
  })

  it('A user can sort the articles by published date in ascending order', () => {
    cy.get('select').select('Published - ascending')
    cy.get('.card').eq(0).children('dl').children('dd').eq(0).contains('Article #3')
    cy.get('.card').eq(2).children('dl').children('dd').eq(0).contains('Article #1')
  })

  it('A user can sort the articles by updated date in ascending order', () => {
    cy.get('select').select('Updated - ascending')
    cy.get('.card').eq(0).children('dl').children('dd').eq(0).contains('Article #1')
    cy.get('.card').eq(2).children('dl').children('dd').eq(0).contains('Article #2')
  })

  it('A user can sort the articles by updated date in descending order', () => {
    cy.get('select').select('Updated - descending')
    cy.get('.card').eq(0).children('dl').children('dd').eq(0).contains('Article #2')
    cy.get('.card').eq(2).children('dl').children('dd').eq(0).contains('Article #1')
  })
  
  it('Clicking on a card should take the user to a detailed page for that article', () => {
    cy.get('.card').eq(0).click()
    cy.url().should('include', '/article/3CnlvBu')
  })

})