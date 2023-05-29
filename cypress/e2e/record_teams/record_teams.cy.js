/// <reference types="cypress"/>
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given(/^today is a match day$/,()=>{
    cy.visit('https://www.bbc.com/sport/football/scores-fixtures')
})

When(/^I request the list of teams playing today$/,()=>{
    cy.get("#sp-nav-secondary > li.sp-c-sport-navigation__item.sp-c-sport-navigation__item--secondary-selected > a").click();
    cy.get('#sp-timeline-current-dates > .sp-c-date-picker-timeline__item > .sp-c-date-picker-timeline__item-inner > .gel-long-primer-bold').contains('TODAY');
})

Then(/^I should see record of teams playing today$/,()=>{
    cy.get(".qa-match-block").should('be.visible');

});

Then(/^If there are no matches today,I should see a message 'No matches today.'$/,()=>{
    cy.get('.qa-match-block').should(($element) => {
        if ($element.length === 0) {
          cy.log("No matches today.");
        } 
      });
})