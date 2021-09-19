describe('Dashboard View', () => {

  beforeEach(() => {
    cy.loadDetails()
  })

  it('The page should have a header', () => {
    cy.get('h1').contains('New Fork Times')
  })

  it('The page should display a title', () => {
    cy.get('dd').eq(0).contains('Article #1')
  })

  it('The page should display an author', () => {
    cy.get('dd').eq(1).contains('Travis Rollins')
  })

  it('The page should display a published date', () => {
    cy.get('dd').eq(2).contains('9/15/2021 --- 4:53:49 PM')
  })

  it('The page should display a last updated date', () => {
    cy.get('dd').eq(3).contains('9/16/2021 --- 5:35:13 PM')
  })

  it('The page should display a section', () => {
    cy.get('dd').eq(4).contains('arts')
  })

  it('The page should display a link to the article', () => {
    cy.get('dd').eq(5).children('a').should('have.attr', 'href').and('includes', 'https://nyti.ms/3CnlvBu')
  })

  it('The page should display a link to multimedia', () => {
    cy.get('dd').eq(6).children('a').should('have.attr', 'href').and('includes', 'https://c.tenor.com/QAN9RxLUSxUAAAAM/cat-cute.gif')
  })

  it('The page should display an abstract', () => {
    cy.get('dd').eq(7).contains(`I'm baby wolf knausgaard drinking vinegar`)
  })

  // it('The page should have a button that takes the user back to the dashboard', () => {
  // })

})