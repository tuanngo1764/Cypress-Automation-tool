// npx eyes-setup 
/* set APPLITOOLS_API_KEY= {yourAPIKey} -> 
navigate to https://eyes.applitools.com/app/test-results/00000251793580621053/?accountId=TV6GlIm9OkKsld8cLSkZDQ~~ */

/// For running a single spec.js file.
/// npx cypress run --spec "cypress/integration/evernote-app/evernote.spec.js" 
/// https://dashboard.cypress.io/projects/qqk21x/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

/// <reference types="cypress" />

import { Constant } from '../../common/constant/constant';
import { HomePage } from '../../page-objects/evernote-app/home-page';

describe('visual validation', () => {

    const constant = new Constant();
    const homePage = new HomePage();

    before(() => cy.visit('https://evernote.com/intl/vi/?delay-new-todo=5000'))

    beforeEach(() =>
        cy.eyesOpen({
            appName: 'Evernote with eyes',
            batchName: 'Evernote with eyes',
            browser: [
                { name: 'chrome', width: 1024, height: 768 },
                { name: 'chrome', width: 800, height: 600 },
                { name: 'firefox', width: 1024, height: 768 },
                { deviceName: 'iPhone X' },
            ]
        })
    )

    afterEach(() => cy.eyesClose())

    it('check pre condition', () => {
        cy.log("TCO1: Sample test script");
        cy.log(`Step 1: Navigate to Home page: ${constant.evernoteUrl}`);
        homePage.validateNavigateToCorrectlyPage(constant.evernoteUrl)
            .validateAttributeDisplayedCorrectly('.top .global-logo > a', 'href', '/intl/vi/', constant.SHORT_TIME)
            .validateAttributeDisplayedCorrectlyForJQuery('.top .global-logo > a:first', 'href', '/intl/vi/');
    })

    it('main test', () => {

        homePage.openLeftNavModal()
        // .selectOptionInLeftNavModal(LeftNavOption.FEATURE)
        // .selectOptionInFeatureFunction(FeatureOption.NOTES_APP);

        cy.eyesCheckWindow('mark as completed');
    })
})