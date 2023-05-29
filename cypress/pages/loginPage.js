export class LoginPage{

    signinPage(){
        cy.visit("https://account.bbc.com/signin");
    }

    enterUsername(text){
        cy.get('#user-identifier-input').type(text);
    }

    enterPassword(text){
        cy.get('#password-input').type(text);
    }

    clickSubmitBtn(){
        cy.get('#submit-button').click();
    }

    error_message_general(text){
        cy.get('#form-message-general').should(text);
    }

    error_message_general_text(text){
        cy.get('#form-message-general > .form-message__text').contains(text);
    }

    error_form_message_text_contains(text){
        cy.get('.form-message__text > :nth-child(1) > span').contains(text);

    }

    error__message_text_contains(text){
        cy.get('.form-message__text > :nth-child(1) > :nth-child(1)').contains(text);
        
    }

    error_form_message_username(text){
        cy.get('#form-message-username').should(text);
    }

    error_form_message_password(text){
        cy.get('#form-message-password').should(text);
    }

    error_message_username_contains(text){
        cy.get('#form-message-username > .form-message__text > :nth-child(1) > :nth-child(1)').contains(text);

    }

    error_message_password_contains(text){
        cy.get('#form-message-password > .form-message__text > :nth-child(1) > :nth-child(1)').contains(text);
    }
}