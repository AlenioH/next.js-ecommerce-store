/// <reference types="cypress" />

context('Quantity', () => {
  it('can change quantity of given product', () => {
    cy.visit('http://localhost:3000/products/2'); //ok well this actually DOES visit the page yay!
    cy.get("input[type='number']").type('2');
    cy.get('[data-cy="total-price/jungle rug"]').contains(480);
    cy.get("input[type='number']").clear();
    cy.get('[data-cy="total-price/jungle rug"]').should('be.empty');

    cy.visit('http://localhost:3000/products/8');
    // cy.get("input[type='number']").then(($el) => $el.get(0).stepUp(3)); //this part here increments the amount of items, but it somehow fails the test => it doesnt display the price
    cy.get("input[type='number']").type('5');
    cy.get('[data-cy="total-price/catey caterson pet couch"]').contains(14995);
    cy.get("input[type='number']").clear();

    cy.get("input[type='number']").type('3');
    cy.get('[data-cy="total-price/catey caterson pet couch"]').contains(8997);
  });
});
