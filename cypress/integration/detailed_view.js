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

  // it('The page should display a published date', () => {
  // })

  // it('The page should display a last updated date', () => {
  // })

  // it('The page should display a section', () => {
  // })

  // it('The page should display a link to the article', () => {
  // })

  // it('The page should display a link to multimedia', () => {
  // })

  // it('The page should display an abstract', () => {
  // })

  // it('The page should have a button that takes the user back to the dashboard', () => {
  // })

})