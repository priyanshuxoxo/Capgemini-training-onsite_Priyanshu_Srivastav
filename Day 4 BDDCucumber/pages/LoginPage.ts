import { expect, Page,Locator } from '@playwright/test';

export class LoginPage {

constructor(
private page: Page
) {}


// locators 

private txtUser = '#user-name';

private txtPass = '#password';

private btnLogin ='#login-button';

async openApp() {

await this.page.goto(

'https://www.saucedemo.com/');
}

async login() {

console.log(
'Entering credentials');

// Example
await this.page.fill('input[name="user-name"]','standard_user');
await this.page.fill("//input[@id='password']",'secret_sauce');
await this.page.click('input[name="login-button"]');



}

async loginWithInvalidCredentials(username: string, password: string){
    console.log("Entering Invalid credentials");
    

   // Example
     await this.page.fill('input[name="user-name"]','sta_user');
     await this.page.fill("//input[@id='password']",'set_sauce');
    
    

}
async loginButton(){
    //  await this.page.click('input[name="login-button"]');

     await this.page.click(this.btnLogin);
}
async errorShow(){
    console.log("Checking for error message visibility");
    
 await expect(this.page.locator('[data-test="error"]')).toBeVisible();
}

async loginwithmultipleusers(username: string, password : string){

    await this.page.fill(this.txtUser,username);

    await this.page.fill(this.txtPass,password);

    await this.page.click(this.btnLogin);

}


}

