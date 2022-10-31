describe('Uses delete button ', () => {

  it('searches a song title with the follwing other fields ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="music-table"]')
    .contains('test')
    .parent('tr')
    .within(() => {
      cy.get('td').eq(1).contains('test2')
      cy.get('td').eq(2).contains('test3')
      cy.get('td').eq(3).contains('test4')
      cy.get('td').eq(4).contains('2022-10-10')
      cy.get('td').eq(6).contains('button', 'Delete').click()
    })
    cy.get('[data-cy="music-table"]')
    .should('not.contain', 'test')
    
  })



  it('searches a song artist with the following other fields ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="music-table"]') //TODO: Uncomment and change artist in add song to 'foo'
    // .contains('foo')
    // .parent('tr')
    // .within(() => {
    //   cy.get('td').eq(0).contains('test')
    //   cy.get('td').eq(2).contains('test3')
    //   cy.get('td').eq(3).contains('test4')
    //   cy.get('td').eq(4).contains('2022-10-10')
    //   cy.get('td').eq(6).contains('button', 'Delete').click()
    // })
    // cy.get('[data-cy="music-table"]')
    // .should('not.contain', 'foo')
    
  })


})