/// <reference types="cypress"/>
 
describe('Login', () => {

// cenário 1
    it("Login com sucesso", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user') .type('teste@teste.com');
        cy.get('#password') .type(123456);
        cy.get('#btnLogin') .click ();
        cy.get('#swal2-title').should("have.text", "Login realizado");

    });
   
   })
 

    

   

   


    
    