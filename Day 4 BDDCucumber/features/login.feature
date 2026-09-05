Feature: Login Feature
    @regression
    Scenario: Successfull login with valid credentials
        Given User opens the application
        When User enters credentails
        # And Click the login button
        Then User should login successfully

    Scenario: Unsuccessfull login with invalid credentials
        Given User opens the application
        When User enters invalid credentials
        And clicks the login button
        Then User should see an error message

    Scenario Outline:Verify login with multiple users

        Given User opens the application
        When User enters "<usernames>" and "<password>"
        Then User should login successfully
        Examples:
            | usernames       | password     |
            | standard_user   | secret_sauce |
            | locked_out_user | secret_sauce |  
            | problem_user    | secret_sauce |
            | performance_glitch_user | secret_sauce |
            |error_user       | secret_sauce |
            |visual_user | secret_sauce |
    @smoke        
    Scenario Outline:Verify login with multiple users

        Given User opens the application
        When User enters "<usernames>" and "<password>"
        Then User should see an error message
        Examples:
            | usernames       | password     |
            # | standard_user   | secret_saue |
            | locked_out_user | secret_saue |  
            # | problem_user    | secret_saue |
            # | performance_glitch_user | secret_auce |
            # |error_user       | secret_sace |
            # |visual_user | secret_auce |
