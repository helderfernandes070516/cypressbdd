Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given que o customer acessou a página de login

    Scenario: Validar login com sucesso
        When ele informar o email "helder.fernandes@mkplace.com.br" e senha "mKPLACE@2023" e clicar no botão de acessar
        Then deve visualizar a página inicial

    Scenario: Validar login com E-mail incorreto
        When ele informar o email "helder.incorreto@mkplace.com.br" e senha "mKPLACE@2023" e clicar no botão de acessar
        Then deve visualizar a seguinte mensagem de erro "E-mail ou senha inválidos"

    Scenario: Validar login com Senha incorreta
        When ele informar o email "helder.fernandes@mkplace.com.br" e senha "12345678" e clicar no botão de acessar
        Then deve visualizar a seguinte mensagem de erro "E-mail ou senha inválidos"

    Scenario: Validar login sem informar a Senha do usuário
        When ele informar o e-mail "helder.incorreto@mkplace.com.br" e clica no botão de acessar sem informar a senha
        Then deve visualizar a mensagem "Campo obrigatório" abaixo do campo

    Scenario: Validar login sem informar o E-mail do usuário
        When ele informar a senha "mKPLACE@2023" e clica no botão de acessar sem informar o e-mail
        Then deve visualizar a mensagem "Campo obrigatório" abaixo do campo

    Scenario: Validar login sem informar E-mail e senha
        When ele clicar no botão de login sem informar o campo e-mail e senha
        Then deve visualizar uma mensagem "Campo obrigatório" abaixos dos campos username e senha
