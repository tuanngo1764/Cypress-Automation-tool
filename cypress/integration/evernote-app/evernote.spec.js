/// <reference types="cypress" />

/// For running a single spec.js file.
/// npx cypress run --spec "cypress/integration/evernote-app/evernote.spec.js" 

/// https://dashboard.cypress.io/projects/qqk21x/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

/// Print DEBUG logs -> set DEBUG=cypress:* -> run
/// Debugging browser-> .debug(), cy.pause() -> run
/// Log memory and CPU usage -> set DEBUG=cypress:server:util:process_profiler -> run
/// Disable the Command Log => set CYPRESS_NO_COMMAND_LOG=1 -> run

/// Run parallel -> set CYPRESS_RECORD_KEY=e1495c66-a964-4b6e-81fe-5b579a635027
/// cypress run --record --parallel --ci-build-id $BUILD_TAG


import { Constant } from '../../common/constant/constant';
import { HomePage } from '../../page-objects/evernote-app/home-page';

describe('evernote-app', function () {
    const constant = new Constant();
    const homePage = new HomePage();

    beforeEach(() => {
        cy.log("TCO1: Sample test script");
        cy.log(`Step 1: Navigate to Home page: ${constant.evernoteUrl}`);
        homePage.open(constant.evernoteUrl)
            .validateNavigateToCorrectlyPage(constant.evernoteUrl)
            .validateAttributeDisplayedCorrectly('.top .global-logo > a', 'href', '/intl/vi/', constant.SHORT_TIME)
            .validateAttributeDisplayedCorrectlyForJQuery('.top .global-logo > a:first', 'href', '/intl/vi/');
    })

    it('main test', () => {

        homePage.openLeftNavModal()
        // .selectOptionInLeftNavModal(LeftNavOption.FEATURE)
        // .selectOptionInFeatureFunction(FeatureOption.NOTES_APP);
    })
})