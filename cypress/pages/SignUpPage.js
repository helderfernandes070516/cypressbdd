import faker from "faker-br";

class SignUpPage {
    elements = {
      nameInput: () => cy.getByTestId("sign-up-name-input"),
      documentInput: () => cy.getByTestId("sign-up-document-input"),
      birthdateInput: () => cy.getByTestId("sign-up-birthdate-input"),
      phoneInput: () => cy.getByTestId('sign-up-phone-input'),
      emailInput: () => cy.getByTestId('sign-up-email-input'),
      passwordInput: () => cy.getByTestId('sign-up-password-input'),
      passwordVerifyInput: () => cy.getByTestId('sign-up-passwordVerify-input'),
      signupButton: () => cy.getByTestId('sign-up-submit-button'),
      signupButton: () => cy.getByTestId('sign-up-submit-button')
    };
    
  submitRecoveryPassword(email){

    faker = faker.br.cpf()
      this.elements.recoveryPasswordButton().click()
      this.elements.recoveryPasswordInput().type(faker.br.cpf())
    }
  }




    
export const signUpPage = new SignUpPage();