describe('Uses delete button ', () => {
  it('finds the added song and deletes it ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="music-table"]')
    .contains('test')
    .parent()
    .find('button')
    .contains('Delete')
    .click()

  })

})