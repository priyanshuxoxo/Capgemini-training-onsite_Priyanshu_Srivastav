import {Given,When,Then} from '@cucumber/cucumber';
import {LoginPage} from '../../pages/LoginPage'
import {CustomWorld} from "../../support/world"
import StudentRegistrationPage from '../../pages/StudentRegistrationPage'
 
 
let login : LoginPage;
let register:StudentRegistrationPage;

Given('User opens the application', async function (this:CustomWorld) {

    login = new LoginPage(this.page);
    await login.openApp();       
});
       

       
When('User enters credentails', async function (this:CustomWorld){

     await login.login(); 
});
       

       
Then('User should login successfully',async function (this:CustomWorld) {
  
    console.log("Login successfully")      
});

When('User enters {string} and {string}', async  function (string, string2) {

    await login.loginwithmultipleusers(string,string2);
          
});
       
// Then('User should view the error message', function () {

//     console.log("error displayed");
          
// });

// Given("User opens application", async function (this:CustomWorld) {
//     login = new LoginPage(this.page);
//     await login.openApp();       
// });
When('User enters invalid credentials', async function (this:CustomWorld) {

    await login.loginWithInvalidCredentials('sta_user','set_sauce'); 
});

When('clicks the login button', async function (this:CustomWorld) {

    console.log("Clicking the login button");
    await login.loginButton();
});
Then('User should see an error message', async function (this:CustomWorld) {

    console.log("Checking for error message");
              await login.errorShow();
});


// Given('User opens the application', async function (this:CustomWorld) {

//     login = new LoginPage(this.page);
//     await login.openApp();       
// });
When('User enters "<usernames>" and "<password>"', async function (this:CustomWorld, usernames: string, password: string) {

    await login.loginwithmultipleusers(usernames, password);
});
// Then('User should login successfully', async function (this:CustomWorld) {
//     console.log("Login successfully");
// });










Given("the user is on the student registration page", async function (this:CustomWorld) {
    register = new StudentRegistrationPage(this.page);
    await register.navigateToPage();

});

When("the user enters valid student details {string},{string},{string},{string},{string},{string},{string},{string},{string},{string}", async function (this:CustomWorld, studentName: string, email: string, gender: string, mobile: string, birthdate: string, subjects: string, hobbies: string, currentAddresss: string, state: string, city: string) {



console.log("Registering user here")

    await register.registerUser(studentName, email, gender, mobile, birthdate, subjects, hobbies, currentAddresss, state, city);

});

When("submits the registration form", async function (this:CustomWorld) {

    console.log("Registration form filled");


});

Then("the student should be successfully registered", async function (this:CustomWorld) {

    console.log("Registration fulfilled");
    await register.registerButton();
});