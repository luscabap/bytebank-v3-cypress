describe("Formulário Cadastro", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    it("Usuário deve conseguir se cadastrar com sucesso", () => {
        cy.getByDataTest("botao-cadastro").click();
        cy.getByDataTest("nome-input").type("Lucas");
        cy.getByDataTest("email-input").type("lucas7@gmail.com");
        cy.getByDataTest("senha-input").type("123");
        cy.getByDataTest("checkbox-input").click();
        cy.getByDataTest("botao-enviar").click();
        cy.getByDataTest('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })
    describe.only("Verifica se está com algum erro no cadastro", () => {
        beforeEach(() => {
            cy.getByDataTest("botao-cadastro").click();
        })
        describe("Informa que é obrigatório o Campo: ", () => {
            it("Nome", () => {
                cy.getByDataTest("email-input").type("lucas8@gmail.com");
                cy.getByDataTest("senha-input").type("123");
                cy.getByDataTest("botao-enviar").click();
                cy.getByDataTest("mensagem-erro").should('exist').and('have.text', "O campo de nome é obrigatório")
            })
        })
    })
})