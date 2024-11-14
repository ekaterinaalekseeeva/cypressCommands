declare namespace Cypress {
    interface Chainable<Subject = any> {
        myCommand(aaa: String): void
        // visit(url: any, options: any): Cypress.Chainable<Cypress.AUTWindow>
        myclick(): void
    }
}