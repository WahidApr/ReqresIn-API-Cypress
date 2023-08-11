describe('Update User', () => {
    it('Successfully Update User', () => {
        var user = {
            "name": "Wahid", 
            "job": "QA Engineer"
        }
        cy.request('PUT','https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
    });
})