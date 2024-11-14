// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('myCommand', (aaa: String) => {
    console.log(aaa)
})

type VisitMethod = (url: string, options?: Partial<Cypress.VisitOptions>) => Cypress.Chainable<Cypress.AUTWindow>;

Cypress.Commands.overwrite('visit', (orig: VisitMethod, url: string, options: Partial<Cypress.VisitOptions>) => {
    url = 'https://google.com'
    return orig(url, options)
})

Cypress.Commands.add(
    'myclick',
    {
        prevSubject: 'element',
    },
    (subject) => {
        // receives the previous subject and it's
        // guaranteed to be an element
    }
)

//Uncomment the following lines to check warnings

// Cypress.Commands.add('myCommand', (aaa: String) => {})
//
// Cypress.Commands.overwrite('myCommand', ()=>{})
//
// Cypress.Commands.overwrite('visit', (orig, url, options) => {})