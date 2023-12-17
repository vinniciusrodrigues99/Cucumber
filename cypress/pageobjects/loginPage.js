import {Given} from 'cypress-cucumber-preprocessor'

Given("que estou na pagina inicial", ()=>{
    cy.visit("http://kmdobrasil.homelinux.com:49013/login");
});