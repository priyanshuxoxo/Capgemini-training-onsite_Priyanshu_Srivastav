Feature:Student Registration
  Scenario Outline: Successful student registration
    Given the user is on the student registration page
    When the user enters valid student details "<studentName>","<email>","<gender>","<mobile>","<birthdate>","<subjects>","<hobbies>","<currentAddresss>","<state>","<city>"
    And submits the registration form
    Then the student should be successfully registered

  Examples:
    | studentName | email | gender |mobile|birthdate|subjects|hobbies|currentAddresss|state|city|
    | Priyanshu Srivastav|priyanshu.sri201@gmail.com|Male|6394226160|2002-07-23|Maths|Sports|Bangalore|Haryana|Lucknow|
