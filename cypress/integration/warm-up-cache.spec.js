describe('Warm up cache', () => {
  const BASE_PATH = Cypress.env('BASE_PATH') || '/'
  it('open root page', () => {
    cy.visit(`https://panor.am${BASE_PATH}`)
  })
  it('visit places page', () => {
    cy.visit(`https://panor.am${BASE_PATH}places`)
  })
})
