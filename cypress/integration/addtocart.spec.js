/// <reference types="cypress" />
context('Add to cart', () => {
  it('adds given item to cart', () => {
    cy.visit('http://localhost:3000/products/6');
    //add item to cart
    cy.get('[data-cy="add-cart-button"]').click();
    cy.visit('http://localhost:3000/cartPage');
    cy.get('.item > p').contains('Fluffy cushion');
    //remove item from cart
    cy.get('[data-cy="remove-button"]').click();
    cy.get('.tableItems').contains('The cart is empty...');

    //another item
    cy.visit('http://localhost:3000/products/9');
    //increase amount
    cy.get("input[type='number']").type('2');
    //check price
    cy.get('[data-cy="total-price/magic clock"]').contains(338);
    // click add to cart button
    cy.get('[data-cy="add-cart-button"]').click();
    //go to cart
    cy.visit('http://localhost:3000/cartPage');
    //check if the item is there, price and quantity are correct
    cy.get('.item > p').contains('Magic clock');
    cy.get('.amount-cart').contains('2');
    cy.get('.total-cart').contains('338');
    //reduce amount in cart
    cy.get('[data-cy="reduce-button"]').click();
    cy.get('.amount-cart').contains('1');
    cy.get('.total-cart').contains('169');

    //add one more
    cy.get('[data-cy="add-button"]').click();
    cy.get('.amount-cart').contains('2');
    cy.get('.total-cart').contains('338');

    //remove item from cart
    cy.get('[data-cy="remove-button"]').click();
    cy.get('.tableItems').contains('The cart is empty...');
  });
});
