import { faker } from "@faker-js/faker";
const fakerEmail = faker.internet.email()
class SignUpPage {
  elements = {
    signupButtonHome: () => cy.get('#signin2'),
    signupButton: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    inputUsername: () => cy.get('#sign-username'),
    inputPassword: () => cy.get('#sign-password'),
  };



  submitNewUser() {

    this.elements.signupButtonHome().click()
    this.elements.inputUsername().type(fakerEmail)
    this.elements.inputPassword().type('123456789')
    this.elements.signupButton().click()
  }
}

export const signUpPage = new SignUpPage();