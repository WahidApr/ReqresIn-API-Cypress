/// <reference types="cypress"/>
describe('Types of Validation', () => {
    it('Successfully validate content-type ', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8') 
    });

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200) 
    });

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    });

    it('Update User', () => { //"Another code to validate content"
        var newUser = {
            "name": 'Wahid',
            "job": 'QA Engineer'
        } 
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })   
    });

    it('Successfully validate negative response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404) 
    });

}) 