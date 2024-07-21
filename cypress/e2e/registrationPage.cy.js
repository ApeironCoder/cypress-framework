import fixturesData from "../../cypress/fixtures/registrationData.json";
import regLoc from "../../cypress/pages/registrationPage.json";
const { clickAction, typeText, generateRandomEmail, checkBoxCheck, forceClick, verifyAccountCreated } = require("../utils/genericUtils.cy")

const { firstName, secondName } = fixturesData.name;
const { password } = fixturesData.password;
const { telephone, accountCreated } = fixturesData;
const { myAccount, register, checkBox, accountCreatedLoc, continueBtn } = regLoc;
const { firstNameLoc, lastNameLoc, emailId, telephoneNumber, newPassword, confirmPass } = regLoc.registrationPage; 


describe('registration test case', () => {

    beforeEach(() => {
        const baseUrl = Cypress.config().baseUrl;
        cy.visit(baseUrl);
    })

    it('registration', () => {

        clickAction(myAccount);
        clickAction(register);
        typeText({ locatorName: firstNameLoc, text: firstName });
        typeText({ locatorName: lastNameLoc, text: secondName });
        typeText({ locatorName: emailId, text: generateRandomEmail() });
        typeText({ locatorName: telephoneNumber, text: telephone });
        typeText({ locatorName: newPassword, text: password });
        typeText({ locatorName: confirmPass, text: password });
        checkBoxCheck({ locator: checkBox });
        forceClick({ element: continueBtn });
        verifyAccountCreated({ Element: accountCreatedLoc, value: accountCreated })
        throw new Error("Hi");

    })
    
})