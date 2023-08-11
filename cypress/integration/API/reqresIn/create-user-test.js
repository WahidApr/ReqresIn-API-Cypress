describe('Create New User',() => {
    it('Add A New User', () => {
        var user = {
            "name": "Wahidapr",
            "job": "QA Engineer"
        }
        cy.request('POST','https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
    
        })
    });
    
})