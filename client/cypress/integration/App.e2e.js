beforeEach(() => {
  cy.server()
  cy.fixture('phones.json').as('phones')
  cy.route('**/phones', '@phones').as('getPhones')
  cy.route('**/images/*', 'fx:phone_image.png').as('getPhoneImage')
})
describe('App navigation complete', () => {
  it('should have a header and main', () => {
    cy.visit('/')
    cy.get('header').should('exist')
    cy.get('main').should('exist')
  })
  it('rendering same received phones', () => {
    cy.get('@phones').then((data) => {
      cy.get('[data-testid=phone-item]').should('have.length', data.length)
    })
  })
  it('go to phone on click item', () => {
    cy.get('[data-testid=phone-item]').first().click()
    cy.get('[data-testid=phone-detail]').should('exist')
  })
  it('return home on close detail', () => {
    cy.get('[data-testid=close-detail]').first().click()
    cy.get('[data-testid=phone-item]').should('exist')
  })
})
