/// <reference types="cypress" />

export class SeleniumHelper {

    /**
     * @author tuan.ngo
     * 
     *         Gets the attribute of element.
     * 
     * @return String, the attribute of the control
     */
    getAttribute(_element, attribute, timeout) {
        cy.log(`Gets the attribute: ${attribute} of the control: ${_element}`)
        return cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .invoke('attr', attribute)
            .then($value => {
                console.log($value);
                return $value;
            });
    }

    /**
     * @author tuan.ngo
     * 
     *         Click to the control.
     */
    click(_element, timeout) {
        cy.log(`Click to the control: ${_element}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .click();
    }

    /**
     * @author tuan.ngo
     * 
     *         Click to the control with focus.
     */
    clickWithFocus(_element, timeout) {
        cy.log(`Click on the control: ${_element} with focus`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .focused()
            .click();
    }

    /**
     * @author tuan.ngo
     * 
     *         Double-click to the control.
     */
    doubleClick(_element, timeout) {
        cy.log(`Double-click to the control: ${_element}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .dblclick();
    }

    /**
     * @author tuan.ngo
     * 
     *         Double-click to the control with focus.
     */
    doubleClickWithFocus(_element, timeout) {
        cy.log(`Double-click on the control: ${_element} with focus`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .focused()
            .dblclick();
    }

    /**
     * @author tuan.ngo
     * 
     *         Force a click on the control.
     */
    performToForceClick(_element, timeout) {
        cy.log(`Force a click on the control: ${_element}`);
        cy.get(_element)
            .click({ force: true });
    }

    /**
     * @author tuan.ngo
     * 
     *         Force a double-click on the control.
     */
    performToForceDoubleClick(_element, timeout) {
        cy.log(`Force a double-click on the control: ${_element}`);
        cy.get(_element)
            .dblclick({ force: true });
    }

    /**
     * @author tuan.ngo
     * 
     *         Move mouse to the control.
     */
    performMouseover(_element, timeout) {
        cy.log(`Move mouse to the control: ${_element}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .trigger('mouseover');
    }

    /**
     * @author tuan.ngo
     * 
     *         Enter text into the control.
     * 
     *         Clear the control first the send keys to the control. 
     *         Click TAB Key.
     */
    sendkeys(_element, value, timeout) {
        cy.log(`Enter the value: ${value} to the control: ${_element}`);
        this.clickWithFocus(_element, timeout)
            .clear()
            .type(value)
            .tab();
    }

    /**
     * @author tuan.ngo
     * 
     *         Validate the alert's text displayed correctly.
     */
    validateAlertTextDisplayedCorrectly(message) {
        cy.log(`Validate the text: ${message} on the Alert displayed correctly`);
        cy.on('window:alert', (text) => {
            expect(text).to.equal(message);
        })
    }

    /**
     * @author tuan.ngo
     * 
     *         Click Ok on the Alert.
     */
    clickOkOnAlert() {
        cy.log("Click on the 'Ok' button on the alert");
        cy.on('window:confirm', () => true);
    }

    /**
     * @author tuan.ngo
     * 
     *         Validate the text on Confirm form displayed correctly.
     */
    ValidateTextOnConfirmFormDisplayedCorrectly(message) {
        cy.log(`Validate the text: ${message} on the Confirm form displayed correctly`);
        cy.on('window:confirm', (text) => {
            expect(text).to.equal(message);
        })
    }

    /**
     * @author tuan.ngo
     * 
     *         Click Ok on the Confirm modal.
     */
    clickOkOnConfirmModal() {
        cy.log("Click on the 'Ok' button on the Confirm modal");
        cy.on('window:confirm', () => true);
    }

    /**
     * @author tuan.ngo
     * 
     *         Click Cancel on the Confirm modal.
     */
    clickOkOnConfirmModal() {
        cy.log("Click on the 'Cancel' button on the Confirm modal");
        cy.on('window:confirm', () => false);
    }

    /**
     * @author tuan.ngo
     * 
     *         Select by value.
     * 
     * @param _parentElement: the parent element contains options.
     * @param value: the value of the option.
     */
    selectByVisibleText(_parentElement, value, timeout) {
        cy.log(`Select the option of the control ${_parentElement} by value: ${value}`);
        cy.get(_parentElement, { timeout: timeout })
            .should('be.visible')
            .select(value);
    }

    /**
     * @author tuan.ngo
     * 
     *         Select multiple options.
     *
     * @param _parentElement: the parent element contains options.
     * @param arrValue: the value array of the options that need to be selected.
     */
    selectMultipleOptions(_parentElement, arrValue, timeout) {
        cy.log(`Select the multiple options of the control ${_parentElement} by the value array: ${arrValue}`);
        cy.get(_parentElement, { timeout: timeout })
            .should('be.visible')
            .select(arrValue);
    }

    /**
     * @author tuan.ngo
     * 
     *         Force select by value.
     * 
     * @param _parentElement: the parent element contains options.
     * @param value: the value of the option.
     */
    forceSelectByVisibleText(_parentElement, value) {
        cy.log(`Select the option of the control ${_parentElement} by value: ${value}`);
        cy.get(_parentElement)
            .select(value, { force: true });
    }

    /**
     * @author tuan.ngo
     * 
     *         Select by index.
     * 
     * @param _parentElement: the parent element contains options.
     * @param _chilElement: the child element, default is 'option' tag.
     * @param index: the index of the option needs to be selected.
     */
    selectByIndex(_parentElement, index, timeout, _chilElement = 'option') {
        cy.log(`Select the option of the control ${_parentElement} by index: ${index}`);
        const value = cy.get(_parentElement, { timeout: timeout })
            .find(_chilElement)
            .eq(index - 1);
        this.selectByVisibleText(_parentElement, value, timeout);
    }

    /**
     * @author tuan.ngo
     * 
     *         Check the check-box, radio type control.
     */
    check(_element, timeout) {
        cy.log(`Check the control: ${_element}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .check();
    }

    /**
     * @author tuan.ngo
     * 
     *         Un-check the check-box, radio type control.
     */
    uncheck(_element, timeout) {
        cy.log(`Un-check the control: ${_element}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .uncheck();
    }

    /**
     * @author tuan.ngo
     * 
     *         Force check the check-box, radio type control.
     */
    forceCheck(_element) {
        cy.log(`Force check the control: ${_element}`);
        cy.get(_element)
            .check({ force: true });
    }

    /**
     * @author tuan.ngo
     * 
     *         Check the check-box, radio type control by value.
     */
    checkByValue(value) {
        cy.log(`Check the control: ${_element} by value: ${value}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .check(value);
    }

    /**
     * @author tuan.ngo
     * 
     *         Un-check the check-box, radio type control by value.
     */
    uncheckByValue(value) {
        cy.log(`Un-check the control: ${_element} by value: ${value}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .uncheck(value);
    }

    /**
     * @author tuan.ngo
     * 
     *         Check multiple controls.
     *
     * @param arrValue: the value array of the controls that need to be checked.
     */
    checkMultipleControlByArrValue(_element, arrValue) {
        cy.log(`Check the control: ${_element} by the value array: ${arrValue}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .check(arrValue);
    }

    /**
     * @author tuan.ngo
     * 
     *         Un-check multiple controls.
     *
     * @param arrValue: the value array of the controls that need to be checked.
     */
    uncheckMultipleControlByArrValue(_element, arrValue) {
        cy.log(`Un-check the control: ${_element} by the value array: ${arrValue}`);
        cy.get(_element, { timeout: timeout })
            .should('be.visible')
            .uncheck(arrValue);
    }

    /**
     * @author tuan.ngo
     */
    isChecked(_element, timeout) {
        cy.get(_element, { timeout: timeout })
            .should('be.checked');
    }

    /**
     * @author tuan.ngo
     */
    isDisabled(_element, timeout) {
        cy.get(_element, { timeout: timeout })
            .should(($el) => {
                expect($el).to.not.be('disabled');
            });
    }

    /**
     * @author tuan.ngo
     */
    isSelected(_element, timeout) {
        cy.get(_element, { timeout: timeout })
            .should('be.selected');
    }
}