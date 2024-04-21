describe("Jornadas de usuário", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("Deve permitir que o usuário acesse a aplicação, realize uma transação e faça um logout.", () => {
        cy.getByDataTest("botao-login").click();
        cy.getByDataTest("email-input").type("lucas@gmail.com");
        cy.getByDataTest("senha-input").type("123");
        cy.getByDataTest("botao-enviar").click();
        cy.location("pathname").should("eq", "/home");

        cy.getByDataTest("select-opcoes").select('Transferência');
        cy.getByDataTest("form-input").type("75");
        cy.getByDataTest("realiza-transacao").click();

        cy.getByDataTest("lista-transacoes").find('li').contains('75');

        cy.getByDataTest('botao-sair').click();
        cy.location("pathname").should('eq', '/')
    })
    it.only("Deve permitir se cadastrar, logar na conta e ser direcionada a página Home.", () => {
        const email = "bruno4@gmail.com";
        const senha = "123"
        cy.getByDataTest("botao-cadastro").click()
        cy.getByDataTest("nome-input").type("Bruno");
        cy.getByDataTest("email-input").type(email);
        cy.getByDataTest("senha-input").type(senha);
        cy.getByDataTest("checkbox-input").click();
        cy.getByDataTest("botao-enviar").click();
        cy.getByDataTest("mensagem-sucesso").should("exist").and("have.text", "Usuário cadastrado com sucesso!");
        cy.location("pathname").should("eq", "/")

        cy.getByDataTest("botao-login").click();
        cy.getByDataTest("email-input").type(email);
        cy.getByDataTest("senha-input").type(senha);
        cy.getByDataTest("botao-enviar").click();

        cy.location("pathname").should("eq", "/home");
    })
})