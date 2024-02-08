class LoginPage {
  elements = {
    loginBtnHome: () => cy.get('#login2'),
    loginlabel: () => cy.get('#logInModalLabel'),
    usernameInput: () => cy.get('#loginusername'),
    passwordInput: () => cy.get('#loginpassword'),
    loginButton: () => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    logoutButton: () => cy.get('#logout2'),
    
  };
  
  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }
  
  typePassword(password) {
    this.elements.passwordInput().type(password);
  }
  
  clickLoginHome() {
    this.elements.loginBtnHome().click();
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  clickLogout() {
    this.elements.logoutButton().click();
  }

  submitLoginSuccess() {
    this.typeUsername("Roberta84@hotmail.")
    this.typePassword("123456789")
    cy.wait(2000)
    this.clickLoginButton()
    cy.wait(2000);
    cy.get('#nameofuser').contains("Welcome Roberta84@hotmail.")
  } 
}
  
export const loginPage = new LoginPage();