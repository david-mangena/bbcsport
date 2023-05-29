export class SearchPage{

    searchHomePage(){
        cy.visit("https://www.bbc.co.uk/search?q=&d=SPORT_GNL");
    }

    searchBar(text){
        cy.get('[data-testid="test-search-input"]').type(text+"{enter}");

    }

    searchArticles(text){
        cy.get("#main-content > div.ssrcss-1v7bxtk-StyledContainer.enjd40x0 > div > div > ul").should(text);

    }

    firstHeading(text){
        cy.get('[data-testid="default-promo"]').contains(text);
    }

    lastHeading(text){
        cy.get('[data-testid="default-promo"]')
        .contains(text);
    }
}