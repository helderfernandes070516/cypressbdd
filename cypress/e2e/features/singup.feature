Feature: Sing Up

    Feature to signup new user on Victor Hugo site.

    Background:
        Given que o usuario acessou a pagina de cadastro

    Scenario: Validar cadastro com sucesso
        When preencher todos os campos e clicar em cadastrar
        Then o cadastro deverá ser concluido com sucesso