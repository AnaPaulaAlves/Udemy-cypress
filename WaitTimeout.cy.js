//  /<reference types="cypress"/>

// describe('Testes Utilizando Wait e Timeout', ()=>{
    
//     it('Utilizando o Wait e Timeout', ()=>{

//         cy.visit('https://www.google.com.br')

//         cy.get('#APjFqb')
//           .should('be.visible')
//           .click()
//           .type('QAZANDO');

//         // Aguarda o botão de busca aparecer e clica
//         cy.get('input[name="btnK"]', { timeout: 10000 })
//           .should('be.visible')
//           cy.get('#ERWdKc > .wM6W7d > span')
//           .click();
//           cy.get('.FPdoLc > center > .gNO89b').click('bottom')
//           //cy.get('.FPdoLc > center > .gNO89b') .click()
//           .should('be.visible')
//           .click('Pesquisa Google');

//     })
//   })

 ///<reference types="cypress"/>

 describe('Teste de busca no Google', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('solveSimpleChallenge is not defined')) {
        return false // ignora erro da página de desafio do Google
      }
    })
  })

  it('faz busca no Google', () => {
    cy.visit('https://www.google.com')
    

    cy.get('#APjFqb')
      .should('be.visible').click().type('QAZANDO').wait(2000)

    
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')
       .should('be.visible')
       .click()
     

  })

})

//  describe('Utilizando o Wait e Timeout', ()=>{

//   it('Utilizando o Wait e Timeout', ()=>{
     
//     cy.visit('https://www.google.com/')

//     cy.get('#APjFqb')
//       .should('be.visible').click().type('QAZANDO').wait(2000)

    
//     cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')
//        .should('be.visible').click()
//        cy.get('[data-left="373.15625"]').click()
      

//     })  

//   })


