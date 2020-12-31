/// <reference types="cypress" />

export class GeneralPage {

    getLoginBtn() {
        cy.get('nav[class*="utility-nav"] a[href*="Login.action"]')
            .should('be.visible')
            .first()
            .as('loginBtn');
    }

    getLoginBtnOnMobile() {
        cy.get('.mobile-nav > ul > li > a[href*="Login.action"]')
            .should('be.visible')
            .first()
            .as('loginBtnOnMobile');
    }

    getNavOpenBtn() {
        cy.get('.drawer-nav-open-btn > img[src*="nav-open-tablet"]')
            .should('be.visible')
            .first()
            .as('navOpenBtn');
    }

    getDownloadBtn() {
        cy.get('.utility-nav a[href*="/intl/vi/download"]')
            .should('be.visible')
            .first()
            .as('downloadBtn');
    }

    getOptionInLeftNavModal(option) {
        cy.get('.mobile-nav').contains(option)
            .should('be.visible')
            .first()
            .as('optionInLeftModal');
    }

    getOptionInFeatureFunction(option) {
        cy.get(`.mobile-sub-nav-expandable a[href*="${option}"]`)
            .should('be.visible')
            .first()
            .as('optionInFeatureFunction');
    }

    openLeftNavModal() {
        this.getNavOpenBtn();
        this.seleniumHelper.click('@navOpenBtn', this.constant.SHORT_TIME);
        return this;
    }

    selectOptionInLeftNavModal(option) {
        this.getOptionInLeftNavModal(option);
        this.seleniumHelper.click('@optionInLeftModal', this.constant.SHORT_TIME);
        return this;
    }

    selectOptionInFeatureFunction(option) {
        this.getOptionInFeatureFunction(option);
        this.seleniumHelper.click('@optionInFeatureFunction', this.constant.SHORT_TIME);
    }

    openLoginPage() {
        this.getLoginBtn();
        this.seleniumHelper.click('@loginBtn', this.constant.SHORT_TIME);
        return new LoginPage();
    }

    openLoginPageOnMobile() {
        this.getLoginBtnOnMobile();
        this.seleniumHelper.click('@loginBtnOnMobile', this.constant.SHORT_TIME);
        return new LoginPage();
    }

    openDownloadPage() {
        this.getDownloadBtn();
        this.seleniumHelper.click('@downloadBtn', this.constant.SHORT_TIME);
        return new DownloadPage();
    }

    compareAttribute(_element, attribute, expectedValue, timeout) {
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .invoke('attr', attribute)
            .should('equal', expectedValue)
    }

    compareAttributeForJQuery(_element, attribute, expectedValue, timeout) {
        cy.get(_element, { timeout: timeout })
            .should(($el) => {
                expect($el).to.have.attr(attribute, expectedValue);
            })
    }

    validateAttributeDisplayedCorrectly(_element, attribute, expectedValue, timeout) {
        this.compareAttribute(_element, attribute, expectedValue, timeout);
        return this;
    }

    validateAttributeDisplayedCorrectlyForJQuery(_element, attribute, expectedValue, timeout) {
        this.compareAttributeForJQuery(_element, attribute, expectedValue, timeout);
        return this;
    }

    validateNavigateToCorrectlyPage(url) {
        cy.url().should('include', url);
        return this;
    }
}