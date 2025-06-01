// ecommerce.cy.js


describe('Fluxo de Interação no E-commerce', () => {


it('Deve permitir que o usuário navegue até a página de produtos', () => {

cy.visit('http://localhost:3000');

cy.get('#products-list li').should('have.length.greaterThan', 0); // Verifica se há produtos listados

});


it('Deve exibir os botões de "Adicionar ao Carrinho"', () => {

cy.visit('http://localhost:3000');

cy.get('#products-list li button').should('contain', 'Adicionar ao Carrinho'); // Verifica se o botão está presente

});


it('Deve permitir que o usuário clique no botão de "Adicionar ao Carrinho"', () => {

cy.visit('http://localhost:3000');

cy.get('#products-list li').first().find('button').click(); // Simula o clique no primeiro botão

});


})