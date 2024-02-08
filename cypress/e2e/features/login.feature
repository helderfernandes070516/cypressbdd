Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given im on the login page

    Scenario: Validating login with success
        When i input the "Roberta84@hotmail." username and "123456789" password and click on login button
        Then the login is done and the name "Welcome Roberta84@hotmail." is displayed on the footer

    Scenario: Validating login with a invalid user
        When i input the "Helder@123" username and "123456789" password and click on login button
        Then the message "User does not exist." should be displayed

    Scenario: Validating logout with success
        When i make login with success and click on the logout button
        Then the welcome message to the username will desapear
