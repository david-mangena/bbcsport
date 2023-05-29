/// <reference types="cypress"/>

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { SearchPage } from "../../pages/searchPage";
const searchPage = new SearchPage();

Given("I am on the searchpage",()=>{
    searchPage.searchHomePage();
});

When("I search for articles with keyword {string}",(string)=>{
    searchPage.searchBar(string);
});

Then("I should see multiple articles on the page",()=>{
    searchPage.searchArticles('be.visible');
});

Then("I note down the first heading and the last heading",()=>{
    searchPage.firstHeading('Sports Star');
    searchPage.lastHeading('BBC Sports News');
});