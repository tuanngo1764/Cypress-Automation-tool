/// <reference types="cypress" />

import { GeneralPage } from "./general-page";
import { LoginPage } from "./login-page";

export class ComparePlans extends GeneralPage {

    chooseEvernoteVersionByType(evernoteType) {
        cy.get(`.cta a[data-ga-product*="${evernoteType}"]`)
            .should('be.visible')
            .first()
            .click();
        return new LoginPage();
    }

    chooseEvernoteVersionOnPricingTable(evernoteType) {
        cy.get(`#pricing-table-full table a[data-ga-product*="${evernoteType}"]`)
            .should('be.visible')
            .first()
            .click();
        return new LoginPage();
    }
}