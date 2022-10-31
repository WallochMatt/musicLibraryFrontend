describe('Uses the modal to edit an existing song ', () => {
  it('opens the modal on a song ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="music-table"]')
    .contains('test')
    .parent('tr')
    .find('button')
    .contains('Edit')
    .click()
    cy.get('.modal-content')
    .should('exist')
  })

  it('enters in the title field of the modal ', () => {
    cy.get('[data-cy="modal-title"]')
    .click()
    .type('Changed title')
    .should('have.value', 'Changed title')
  })

  it('enters in the artist field of the modal ', () => {
    cy.get('[data-cy="modal-artist"]')
    .click()
    .type('Changed artist')
    .should('have.value', 'Changed artist')
  })

  it('enters in the album field of the modal ', () => {
    cy.get('[data-cy="modal-album"]')
    .click()
    .type('Changed album')
    .should('have.value', 'Changed album')
  })

  it('enters in the genre field of the modal ', () => {
    cy.get('[data-cy="modal-genre"]')
    .click()
    .type('Changed genre')
    .should('have.value', 'Changed genre')
  })

  it('enters in the release date field of the modal ', () => {
    cy.get('[data-cy="modal-date"]')
    .click()
    .type('2022-10-31')
    .should('have.value', '2022-10-31')
  })

  it('presses Enter button and ensuress modal is closed ', () => {
    cy.get('[data-cy="modal-enter"]')
    .click()
    cy.get('.modal-content')
    .should('not.exist')
  })

  it('searches the list for the changed title ', () => {
    cy.get('[data-cy="music-table"]')
    .contains('Changed title')
    .should('not.contain', 'test')
  })

  it('searches the list for the old title ', () => {
    cy.get('[data-cy="music-table"]')
    .should('not.contain', 'test')
  })

})