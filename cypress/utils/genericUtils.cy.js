//this function is for the clickAction
export function clickAction (locatorbtn) {
    cy.contains(locatorbtn).click();
}

//this function is for the type text
export const typeText = ({ locatorName: locator , text: Name }) => {
    cy.get(locator).type(Name).should('have.value', Name);
}

//this function is for the checkbox to be checked
export const checkBoxCheck = ({ locator: checkbox }) => {
    cy.get(checkbox).check();
}

//this is the function for the account to be verified after the creation
export const verifyAccountCreated = ({ Element: locator, value: text }) => {
    cy.get(locator).should('contain.text' , text );
}

//this function is for the force click action
export const forceClick = ({ element: locator }) => {
    cy.get(locator).click({ force: true });
}

//this is the function for the random email generation
export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7);
    return `testuser_${randomString}@example.com`
}

//this is for the verify text 
export const verifyText = (locator) => {
    cy.contains(locator).should("be.visible");
}

//this function is for typing the text and giving enter
export const typeTextClick = ({ locatorName: locator , text: text }) => {
    cy.get(locator).type(`${text}{enter}`);
}
