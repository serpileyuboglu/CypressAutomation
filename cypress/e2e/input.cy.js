/// <reference types="cypress" />

describe('Input Form Tests', () => {
    
    beforeEach('Navigate to the registiration page',() => {
      // run before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('registration_form');
    });
    it('Check different input box fields and verify', () => {
        //fill the form username and other info
        cy.get('input[name="firstname"]').type('Mike');
        cy.get('input[name="lastname"]').type('Brown');
        cy.get('input[name="username"]').type('CrazyHeart');

        /**
          Math.random(): creates a number between 0 - 1 ~ 0.005678
         Math.floor : makes it a whole number
         */
       
        let email = `formTest${Math.floor(100000+Math.random()*900000)}@cydeo.com` 
        cy.get('input[name="email"]').type(email);
     
    });
});
