Cypress.Commands.add('getByDataCy', (nomeDataCy) => {
    return cy.get(`[data-cy=${nomeDataCy}]`)
})