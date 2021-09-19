Cypress.Commands.add('loadHome', () => {
  cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1sPI8hfEhEK7GiJ4Hc2odGXpANBbiCVJ', 
      { statusCode: 200, fixture: 'stub.json' })
    .visit('http://localhost:3000')
})