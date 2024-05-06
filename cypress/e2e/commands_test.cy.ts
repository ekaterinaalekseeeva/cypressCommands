describe('commands_test', () => {
    it('test', () => {
        cy.visit("https://jetbrains.com")
        cy.myCommand('aaa')
        cy.myCommand('abc')
        cy.myCommand('some string')

        cy.get('button').myclick() // has subject, and it is `element`
        cy.myclick() // no subject, will error
        cy.wrap([]).myclick() // has subject, but not `element`, will error
    })
})