// <reference types="cypress" />

describe('Cypress File Upload Tests', () => {
  /**
   * In order to upload files in Cypress we need to install plugin
   * we will run following commond
   * npm install -dev cypress-file-upload
   *
   * we need to import necessary commands to our project
   * in our support folder we have  commands.js file is a good place for putting our utility methods(functions)
   * add following line
   * import 'cypress-file-upload';
   *
   * THE FILE THAT YOU WANT TO UPLOAD SHOULD BE IN YOUR FIXTURE FOLDER
   */

  beforeEach('Navigate to the upload page', () => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/upload');
  });
  it('Check upload action', () => {
    // locator for choose file button
    cy.get('input#file-upload').attachFile('pic.png');
    // click on upload button
    cy.get('#file-submit').click();
    // assert that path message is displayed
    cy.contains('pic.png').should('be.visible');
  });
});
