/// <reference types="cypress"/>

describe('Encontrar HTML de Paginas', ()=>{
     it('Acessar Site Desmostração', ()=>{

        cy.visit('https://www.google.com/')
        
        cy.get('#APjFqb')
        
        cy.get('.FPdoLc > center > .gNO89b')

        
        })
         })