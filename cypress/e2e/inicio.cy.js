describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Titulo deverá renderizar o texto correto', () => {
    cy.log("Procurando pelo titulo de vantagens.")
    cy.getByDataCy("vantagensBanco").contains("Vantagens do nosso banco:")
    cy.getByDataCy("textoApresentacao").contains("Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!")
  })
  it('Botões de cadastro e login deverão existir com textos específicos', () => {
    cy.verificaTextoDoSeletor('desafio', 'Conta e cartão gratuitos')
  })
})