// <reference types="cypress"/>
 
describe('Tela Inicial', () => {

     it("Tela Imagem", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user') .type('anapaula.isa@hotmail.com');
        cy.get('#password') .type(123456);
        cy.get('#btnLogin') .click ();
        cy.get('#swal2-title').should("have.text", "Login realizado");
        cy.get('.swal2-confirm').should('be.visible', 'Botão OK');
        cy.get('.swal2-confirm').click();
        cy.get('.right_list_fix > :nth-child(1) > a').click();
        cy.get('img');
        //cy.get('img')("have.text", "QAZANDO shop");

})
 


})
