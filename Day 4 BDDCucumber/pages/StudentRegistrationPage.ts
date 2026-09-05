import {test,expect, Page,Locator} from "@playwright/test"

class StudentRegistration{

    private page: Page;

    private readonly name!:Locator
    private readonly email!:Locator
    private readonly gender!:Locator
    private readonly mobile!:Locator
    private readonly dateofbirth!:Locator
    private readonly subjects!:Locator
    private readonly hobbies!:Locator
    private readonly currentAddress!:Locator
    private readonly State!:Locator
    private readonly City!:Locator







    constructor(page: Page){
        this.page = page;

        this.name=page.getByPlaceholder("First Name");
        this.email=page.getByPlaceholder("name@example.com");
        this.mobile=page.getByPlaceholder("Enter Mobile Number");
        this.dateofbirth=page.locator("#dob");
        this.subjects=page.getByPlaceholder("Enter Subject");
        // this.hobbies=page.getByLabel("Hobbies");
        this.currentAddress=page.getByPlaceholder("Currend Address");
        this.State=page.locator("#state");
        this.City=page.locator("#city");

    }

    async navigateToPage() {
        await this.page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    }
    async registerUser(name: string, email: string, gender: string, mobile: string, birthdate: string, subjects: string, hobbies: string, currentAddresss: string, state: string, city: string){
        console.log("Entering Data");


        console.log(`Registering user with name: ${name}, email: ${email}, gender: ${gender}, mobile: ${mobile}, birthdate: ${birthdate}, subjects: ${subjects}, hobbies: ${hobbies}, currentAddresss: ${currentAddresss}, state: ${state}, city: ${city}`);


        await this.name.fill(name);
        await this.email.fill(email);
        this.page.locator("#gender").click();
        await this.mobile.fill(mobile);
        await this.dateofbirth.fill(birthdate);
        await this.subjects.fill(subjects);
        await this.page.locator("#hobbies").click();
        await this.currentAddress.fill(currentAddresss);
        await this.State.selectOption(state);
        await this.City.selectOption(city);
    }

    async registerButton(){
        await expect(this.page.getByRole("button",{name:"Login"})).toBeVisible();
    }
   
}

export default StudentRegistration;



