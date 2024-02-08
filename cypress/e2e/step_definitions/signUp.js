import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { signUpPage } from '@pages/SignUpPage'

Given("i'm on the signup page", () => {
    cy.visit('/')
    cy.get('#nava').should('be.visible')
})

When("provide all access data", () => {
    signUpPage.submitNewUser()
})

Then("the message {string} should be displayed", (message) => {
    cy.on('window:alert', (t) => {
        expect(t).to.contains('Sign up successful.')
    })
})