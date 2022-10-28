describe('With the search bar ', () => {
  it('types in the box ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="srchbx"]')
    .click()
    .type('test')
    .wait(150) 
    .type('{enter}')
  })

  it('checks for the added song ', () => {
    cy.get('[data-cy="music-table"] > :nth-child(1) > :nth-child(1)')
    .should('exist')

  })

  it('ensures the orginal first song does not exist ', () => {
    cy.get('[data-cy="music-table"] > :nth-child(1) > :nth-child(1)')
    .should('not.have.text', 'Holiday')
  })
})