describe('With the search bar ', () => {
  
  it('types in the box ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="srchbx"]')
    .click()
    .type('test')
    .wait(150) 
    .type('{enter}')
    .should('have.value', 'test')
  })

  it('checks for the added song ', () => {
    cy.get('[data-cy="music-table"] > :nth-child(1) > :nth-child(1)')
    .should('exist')

  })

  it('ensures the first song is "test" ', () => {
    cy.get('[data-cy="music-table"] > :nth-child(1) > :nth-child(1)')
    .should('have.text', 'test')
  })

  it('ensures the original first song does not appear ', () => {
    cy.get('[data-cy="music-table"] > tr > :nth-child(1)')
    .should('not.have.text', 'Holiday')
  })


})