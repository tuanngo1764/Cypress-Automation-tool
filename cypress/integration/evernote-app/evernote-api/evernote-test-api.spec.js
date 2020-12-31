/// <reference types="cypress" />

describe('Evernote API', function () {

    beforeEach(() => { cy.request('https://evernote.com/').as('homePage') });

    it('should return the correct status code', () => {
        cy.get('@homePage').its('status').should('be.equal', 200);
    })

    it('main test', () => {
        cy.request('https://evernote.com/features/notes-app').as('notesApp');
        cy.get('@notesApp').its('status').should('be.equal', 200);
    })
})