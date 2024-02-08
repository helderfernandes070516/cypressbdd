import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { signUpPage } from '@pages/SignUpPage'

Given("que o usuario acessou a pagina de cadastro", () => {
    
})

When("preencher todos os campos e clicar em cadastrar", (email) => {
    recoveryPasswordPage.submitRecoveryPassword(email)
    recoveryPasswordPage.elements.recoveryPasswordSubmit().click()
})

Then("clicar no link esqueci minha senha, informar o e-mail {string} e clicar em recuperar senha", (email) => {
    recoveryPasswordPage.submitRecoveryPassword(email)
    recoveryPasswordPage.elements.recoveryPasswordSubmit().click()
})