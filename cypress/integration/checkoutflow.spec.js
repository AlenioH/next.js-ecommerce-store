/// <reference types="cypress" />

context('Checkout flow', () => {
  it('proceed to payment page from cart', () => {
    cy.visit('http://localhost:3000/products/4');
    // cy.get('input').type('3');
    cy.get('[data-cy="add-cart-button"]').click();
    cy.visit('http://localhost:3000/cartPage');
    cy.get('.item > p').contains('Marijuana rug');
    cy.get('.amount-cart').contains('1');
    cy.get('.total-cart').contains('118');
    //clicks the button proceed to checkout
    cy.get('[data-cy="checkout-button"]').click();
    //checks if the url of the page is correct
    cy.location('pathname').should('include', 'payment');
    cy.get('[data-cy="full-name"]').type('Name');
    cy.get('.total').contains('118');
    //click the "buy" button
    cy.get('[data-cy="buy-button"]').click();
    //check the url
    cy.location('pathname').should('include', 'thx');
    //check if items were removed from cart
    cy.get('.cartItems').should('not.contain', 'Items in cart');
  });
});
