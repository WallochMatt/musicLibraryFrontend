

Cypress.Commands.add('addRecord', (title, artist, album, genre, YYYYMMDD) => {

    
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="title-field"]')
        .click('center')
        .type(title)
        .should('have.value', title)
    
        cy.get('[data-cy="artist-field"]')
        .click('center')
        .type(artist) // HARD CODED: Change this to 'foo' for the second delete test
        .should('have.value', artist)  

        cy.get('[data-cy="album-field"]')
        .click('center')
        .type(album) 
        .should('have.value', album)
    
        cy.get('[data-cy="genre-field"]')
        .click('center')
        .type(genre) 
        .should('have.value', genre) 
    
        cy.get('[data-cy="date-field"]')
        // .click(105, 10) // for calendar icon click instead
        .click()
        .type(YYYYMMDD)
        .should('have.value', YYYYMMDD)

        cy.get('[data-cy="post-button"]')
        .click() 
        cy.get('[data-cy="music-table"]')
        .children()
        .should('have.length', (12))
        //HARD CODED: Remember to switch this number to the expected before running the tests
    
})

Cypress.Commands.add('delRecord', (title, artist, album, genre, YYYYMMDD) => { 
    cy.get('[data-cy="music-table"]')
    .contains(title)
    .parent('tr')
    .within(() => {
        cy.get('td').eq(1).contains(artist)
        cy.get('td').eq(2).contains(album)
        cy.get('td').eq(3).contains(genre)
        cy.get('td').eq(4).contains(YYYYMMDD)
        cy.get('td').eq(6).contains('button', 'Delete').click()
    })
    cy.get('[data-cy="music-table"]')
    .should('not.contain', 'test') //intended to only have one 'test' song title

    //TODO: This version below will look by artist, and confirm the other fields. Each eq refers to a td in a tr in DisplayMusic
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