import React from "react"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.log("Procurando pelo titulo de vantagens.")
    cy.get('[data-cy="vantagensBanco"]').contains("Vantagens do nosso banco:")
  })
})