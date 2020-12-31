/// <reference types="cypress" />

import { Constant } from "../../common/constant/constant";
import { SeleniumHelper } from "../../core/ElementWrapper/SeleniumHelper";
import { ComparePlans } from "./compare-plans";
import { GeneralPage } from "./general-page";
import { LoginPage } from "./login-page";

export class HomePage extends GeneralPage {

    constant = new Constant();
    seleniumHelper = new SeleniumHelper();

    open(url) {
        cy.visit(url);
        return this;
    }

    getFreeSignUpBtn() {
        cy.get('a[href*="/intl/vi/privacy/cookies"]')
            .should('be.visible')
            .first()
            .as('freeSignUpBtn');
    }

    getLoginWithAlreadyAccountLink() {
        cy.get('.login-cta a[href*="Login.action"]')
            .should('be.visible')
            .first()
            .as('loginWithAlreadyAccountLink');
    }

    clickLoginWithAlreadyAccountLink() {
        this.getLoginWithAlreadyAccountLink();
        this.seleniumHelper.click('@loginWithAlreadyAccountLink', this.constant.SHORT_TIME);
        return new LoginPage();
    }

    openComparePlans() {
        this.getFreeSignUpBtn();
        this.seleniumHelper.click('@freeSignUpBtn', this.constant.SHORT_TIME);
        return new ComparePlans();
    }
}