Feature: Sing Up

    Feature to signup new user on demoblaze Store.

    Background:
        Given i'm on the signup page

    Scenario: Validating sigunp with success
        When provide all access data
        Then the message "Sign up successful." should be displayed