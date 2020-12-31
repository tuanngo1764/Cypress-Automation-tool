/// <reference types="cypress" />

import { GeneralPage } from "./general-page";
import { LoginWithApplePage } from "./login-with-apple-page";
import { PersonalPage } from "./personal-page";

export class LoginPage extends GeneralPage {

    getLoginWithGoogleBtn() {
        cy.get('#googleOauthButton')
            .should('be.visible')
            .first()
            .as('loginWithGoogleBtn');
    }

    getLoginWithApple() {
        cy.get('a[href*="/NapAccess.action?provider=apple"]')
            .should('be.visible')
            .first()
            .as('loginWithAppleBtn');
    }

    getEmailTextbox() {
        cy.get('#email-wrapper > input[id="username"]')
            .should('be.visible')
            .first()
            .as('emailTextbox');
    }

    getPasswordTextbox() {
        cy.get('#password-wrapper > input[id="password"]')
            .should('be.visible')
            .first()
            .as('passwordTextbox');
    }

    getContinuteBtn() {
        cy.get('#loginButton')
            .should('be.visible')
            .first()
            .as('continuteBtn');
    }

    clickLoginWithGoogle() {
        this.getLoginWithGoogleBtn();
        this.seleniumHelper.click('@loginWithGoogleBtn', this.constant.SHORT_TIME);
        return this;
    }

    clickLoginWithApple() {
        this.getLoginWithApple();
        this.seleniumHelper.click('@loginWithAppleBtn', this.constant.SHORT_TIME);
        return new LoginWithApplePage();
    }

    clickContinueButton() {
        this.getContinuteBtn();
        this.seleniumHelper.click('@continuteBtn', this.constant.SHORT_TIME);
        return this;
    }

    enterEmailToTextbox(email) {
        this.getEmailTextbox();
        this.seleniumHelper.sendkeys('@emailTextbox', email, this.constant.SHORT_TIME);
        return this;
    }

    enterPasswordToTextbox(password) {
        this.getPasswordTextbox();
        this.seleniumHelper.sendkeys('@passwordTextbox', password, this.constant.SHORT_TIME);
        return this;
    }

    loginSuccess(email, password) {
        this.enterEmailToTextbox(email);
        this.clickContinueButton();
        this.enterPasswordToTextbox(password);
        this.clickContinueButton();
        return new PersonalPage();
    }
}