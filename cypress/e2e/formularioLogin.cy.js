describe('Formulário de Login', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it('Não deve permitir um e-mail inválido', () => {
        cy.getByDataTest("botao-login").click();
        cy.getByDataTest('email-input').type('lucas@gmail');
        cy.getByDataTest('senha-input').type('123');
        cy.getByDataTest('botao-enviar').click();
        cy.getByDataTest('mensagem-erro').should('exist').and('have.text', "O email digitado é inválido");
    })
    it("Não deve permitir um campo em branco", () => {
        cy.getByDataTest("botao-login").click();
        cy.getByDataTest('senha-input').type('123');
        cy.getByDataTest('botao-enviar').click();
        cy.getByDataTest('mensagem-erro').should('exist').and('have.text', "O campo email é obrigatório");
    })
})