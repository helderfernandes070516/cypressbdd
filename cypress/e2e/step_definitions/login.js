import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage'

Given('im on the login page', () => {
    cy.visit("/")
    loginPage.clickLoginHome()
    cy.wait(2000)
});

When("i input the {string} username and {string} password and click on login button", (username, password) => {
    loginPage.typeUsername(username)
    loginPage.typePassword(password)
    cy.wait(2000)
    loginPage.clickLoginButton()
});

Then("the login is done and the name {string} is displayed on the footer", (welcomemessage) => {
    cy.wait(3000);
    cy.get('#nameofuser').contains(welcomemessage)

})

When("i make login with success and click on the logout button", () => {
    loginPage.submitLoginSuccess()
    loginPage.clickLogout()
})

Then("the welcome message to the username will desapear", () => {
    cy.get('#nameofuser').should('not.be.visible')
})