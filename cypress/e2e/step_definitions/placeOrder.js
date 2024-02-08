import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { placeOrderPage } from '@pages/PlaceOrderPage'
import { loginPage } from "@pages/LoginPage";

Given("the user make login with succes", () => {
    cy.visit("/")
    loginPage.clickLoginHome()
    cy.wait(2000)
    loginPage.submitLoginSuccess()
})

When("the user add to the car 2 phones and remove one of then from cart and place order", () => {
    placeOrderPage.addCellphoneCart()
})

Then("the user will populate modal and the order is will finish with success", () => {
    placeOrderPage.populatePlaceOrderModal()
    cy.get('body > div.sweet-alert.showSweetAlert.visible > h2').contains('Thank you for your purchase!')
})