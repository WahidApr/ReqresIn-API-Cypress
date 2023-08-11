describe('Basic Authentication', function() {
it('Successfully login by appending username and password in URL', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth') // tambahkan setelah the-internet.heru 
    cy.get('p').should('include.text','Congratulations! You must have the proper credentials.') //p digunakan karna text menggunakan <p>, cek "pretty".
    });
it('Successfully using login headers', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{
        headers: {
            authorization: 'Basic YWRtaW46YWRtaW4='
        },
        failOnStatusCode:false
    })

    cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    })
});