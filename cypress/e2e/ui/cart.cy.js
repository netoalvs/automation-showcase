describe('Cart Tests', () => {
    it('Should add a product to the cart', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  });