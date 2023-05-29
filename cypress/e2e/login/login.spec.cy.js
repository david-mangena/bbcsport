/// <reference types="cypress"/>

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/loginPage";

const loginPage = new LoginPage();


context('Wrong username and password',()=>{
    Given("I am on the login page",()=>{
        loginPage.signinPage();
    });
    
    When("I enter wrong username and password",()=>{
        cy.fixture("users.json").then((user)=>{
            loginPage.enterUsername(user.username);
            loginPage.enterPassword(user.password);
            loginPage.clickSubmitBtn();
        });
    });
    
    Then("error message should be displayed",()=>{
        loginPage.error_message_general('be.visible');
    });
    
    Then("the error message contain {string}",(error_message_text)=>{
        loginPage.error_form_message_text_contains(error_message_text);
    });
})

context('Enter blank username and password',()=>{
    Given("Am on the login page",()=>{
        loginPage.signinPage();
    });
    
    When("I click submit button", ()=>{
        loginPage.clickSubmitBtn();
    });
    
    Then("the error messages should be displayed", ()=>{
        loginPage.error_message_general('be.visible');
        loginPage.error_form_message_username('be.visible');
        loginPage.error_form_message_password('be.visible');
    });
    
    Then("the error message should contain {string}",(error__message_text)=>{
        loginPage.error_message_general_text(error__message_text);
    });
    
    Then("the error messages should contain {string}",(error__message_txt)=>{
        loginPage.error_message_password_contains(error__message_txt);
        loginPage.error_message_username_contains(error__message_txt);
    });
})

context('Enter invalid username',()=>{
    Given("I am on the SignIn page",()=>{
        loginPage.signinPage();
    });

    When("I enter an invalid username", ()=>{
        cy.fixture("users.json").then((user)=>{
            loginPage.enterUsername(user.invalidusername); 
            loginPage.clickSubmitBtn();
        });
    });

    Then("the error message is displayed",()=>{
        loginPage.error_form_message_username('be.visible');
    });

    Then("check error message contain {string}",(error_msg_text)=>{
        loginPage.error__message_text_contains(error_msg_text);
    });
})

context('Enter short password',()=>{
    Given("Am on the SignIn page",()=>{
        loginPage.signinPage();
    });

    When("I enter a short password", ()=>{
        cy.fixture("users.json").then((user)=>{
            loginPage.enterUsername(user.username);
            loginPage.enterPassword(user.shortpassword)
            loginPage.clickSubmitBtn();
        });
    });

    Then("error message is displayed",()=>{
        loginPage.error_form_message_password('be.visible');
    });

    Then("check error message contains {string}",(error_msg_txt)=>{
        loginPage.error__message_text_contains(error_msg_txt);
    });
})
