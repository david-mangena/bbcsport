export class TeamsPage{

    teamsHomePage(){
        cy.visit('https://www.bbc.com/sport/football/scores-fixtures');
    }

    matchBlock(text){
        cy.get(".qa-match-block").should(text);
    }

    clickScores_n_Fixtures(){
        cy.get("#sp-nav-secondary > li.sp-c-sport-navigation__item.sp-c-sport-navigation__item--secondary-selected > a")
        .click();
    }

    chck_current_date_to_be(text){
        cy.get('#sp-timeline-current-dates > .sp-c-date-picker-timeline__item > .sp-c-date-picker-timeline__item-inner > .gel-long-primer-bold').contains(text);

    }

    matchesToday(text){
        cy.get('.qa-match-block').should(($element) => {
            if ($element.length === 0) {
              cy.log(text);
            } 
        });
    }

}