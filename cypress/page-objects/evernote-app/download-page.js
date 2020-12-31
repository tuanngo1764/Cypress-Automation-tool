/// <reference types="cypress" />

import { AppleStorePage } from "./apple-store-page";
import { GooglePlayPage } from "./google-play-page";
import { MicrosoftStorePage } from "./microsoft-store-page";

export class DownloadPage extends GeneralPage {

    getDownloadWithGooglePlayBtn() {
        cy.get('a[href*="play.google.com/store/apps"] > img')
            .should('be.visible')
            .first()
            .as('downloadWithGooglePlayBtn');
    }

    getDownloadWithAppleStoreBtn() {
        cy.get('a[href*="itunes.apple.com/app/evernote"] > img')
            .should('be.visible')
            .first()
            .as('downloadWithAppleStoreBtn');
    }

    getDownloadWithMicrosoftBtn() {
        cy.get('a[href*="www.microsoft.com"] > img')
            .should('be.visible')
            .first()
            .as('downloadWithMicrosoftBtn');
    }

    clickDownloadWithGooglePlayBtn() {
        this.getDownloadWithGooglePlayBtn();
        this.seleniumHelper.click('@downloadWithGooglePlayBtn', this.constant.SHORT_TIME);
        return new GooglePlayPage();
    }

    clickDownloadWithAppleStoreBtn() {
        this.getDownloadWithAppleStoreBtn();
        this.seleniumHelper.click('@downloadWithAppleStoreBtn', this.constant.SHORT_TIME);
        return new AppleStorePage();
    }

    clickDownloadWithMicrosoftBtn() {
        this.getDownloadWithMicrosoftBtn();
        this.seleniumHelper.click('@downloadWithMicrosoftBtn', this.constant.SHORT_TIME);
        return new MicrosoftStorePage();
    }
}