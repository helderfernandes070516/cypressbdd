Feature: Login page

    Feature place order

    Background:
        Given the user make login with succes

    Scenario: Validating login with success
        When the user add to the car 2 phones and remove one of then from cart and place order
        Then the user will populate modal and the order is will finish with success
