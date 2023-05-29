/// <reference types="cypress"/>

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/loginPage";
const loginPage = new LoginPage();

context('Wrong username and password',()=>{
    Given(/^I am on the login page$/,()=>{
        loginPage.signinPage();
    });
    
    When(/^I enter wrong username and password$/,()=>{
        loginPage.enterUsername('dvdmangena@gmail.com');
        loginPage.enterPassword('Playdav31');
        loginPage.clickSubmitBtn();
    });
    
    Then(/^error message should be displayed$/,()=>{
        loginPage.error_message_general('be.visible');
    });
    
    Then(/^the error message should contain "username or password is wrong"$/,()=>{
        loginPage.error_form_message_text_contains('username or password is wrong');
    });
})

context('Enter blank username and password',()=>{
    Given(/^Am on the login page$/,()=>{
        loginPage.signinPage();
    });
    
    When(/^I click submit button$/, ()=>{
        loginPage.clickSubmitBtn();
    });
    
    Then(/^the error messages should be displayed$/, ()=>{
        loginPage.error_form_message_username('be.visible');
        loginPage.error_form_message_password('be.visible');
    });
    
    Then(/^the error message should contain "Something's missing"$/,()=>{
        loginPage.error_message_text_contains("Something's missing");
    });
    
    Then(/^the error message should contain "don't match"$/,()=>{
        loginPage.error_form_message_general_contains("don't match");
    });
})

context('Enter invalid username',()=>{
    Given(/^I am on the SignIn page$/,()=>{
        loginPage.signinPage();
    });

    When(/^I enter an invalid username$/, ()=>{
       loginPage.enterUsername('dvdmangenagmail.com'); 
       loginPage.clickSubmitBtn();
    });

    Then(/^the error message is displayed$/,()=>{
        loginPage.error_form_message_username('be.visible');
    });

    Then(/^the error message should contain "Usernames"$/,()=>{
        loginPage.error__message_text_contains("Usernames can only include...");
    });
})

context('Enter short password',()=>{
    Given(/^Am on the SignIn page$/,()=>{
        loginPage.signinPage();
    });

    When(/^I enter a short password$/, ()=>{
        loginPage.enterPassword("Playda")
        loginPage.clickSubmitBtn();
    });

    Then(/^error message is displayed$/,()=>{
        loginPage.error_form_message_password('be.visible');
    });

    Then(/^the error message should contain "password is too short"$/,()=>{
        loginPage.error__message_text_contains("password is too short");
    });
})