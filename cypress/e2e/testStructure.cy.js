/// <reference types="cypress" />

describe('Context: My First Tests', () =>{
    before(() =>{
        //runs ones before all test cases in this describe block
    })
    beforeEach(() =>{
        //run before each test case, beforeMethod in TestNG
        cy.clearCookies();
    })
    after(()=> {
        //similar to afterClass in TestNG runs ones after all tests finished
    })
    afterEach(() =>{
        //similar to after method in TestNG
    })
    it('Opening a web application', ()=>{
        cy.visit('registration_form');
        
    })
    //
})