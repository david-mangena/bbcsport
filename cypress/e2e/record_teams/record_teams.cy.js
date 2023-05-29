/// <reference types="cypress"/>

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { TeamsPage } from "../../pages/teamsPage";

const teamsPage = new TeamsPage();

Given("today is a match day",()=>{
    teamsPage.teamsHomePage();
})

When("I request the list of teams playing today",()=>{
    teamsPage.clickScores_n_Fixtures();
    teamsPage.chck_current_date_to_be('TODAY');
})

Then("I should see record of teams playing today",()=>{
    teamsPage.matchBlock('be.visible');
});

Then("If there are no matches today,I should see a message {string}",(err_msg_txt)=>{
    teamsPage.matchesToday(err_msg_txt);
})