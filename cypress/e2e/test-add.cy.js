describe('In posting a song section: ', () => {
  
  it('Types in the add title box ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="title-field"]')
    .click('center')
    .type('test')
    .should('have.value', 'test')
  })
    
  it('Types in the add artist box',() => {
    cy.get('[data-cy="artist-field"]')
    .click('center')
    .type('test2') // HARD CODED: Change this to 'foo' for the second delete test
    .should('have.value', 'test2')  
  })
  
  it('Types in the add album box',() => {
    cy.get('[data-cy="album-field"]')
    .click('center')
    .type('test3') 
    .should('have.value', 'test3')
  })


  it('Types in the add genre box',() => {
    cy.get('[data-cy="genre-field"]')
    .click('center')
    .type('test4') 
    .should('have.value', 'test4') 
  })


  it('Types in the date box',() => {
    cy.get('[data-cy="date-field"]')
    // .click(105, 10) // for calendar icon click instead
    .click()
    .type('2022-10-10')
    .should('have.value', '2022-10-10')
  })

  it('Presses "Add Song" button and creates a new entry',() => {
    cy.get('[data-cy="post-button"]')
    .click() 
    cy.get('[data-cy="music-table"]')
    .children()
    .should('have.length', (12))
    //HARD CODED: Remember to switch this number to the expected before running the tests
  })

})