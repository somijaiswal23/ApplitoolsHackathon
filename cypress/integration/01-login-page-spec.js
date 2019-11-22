import LoginPage from '../page-objects/loginPage.js'

describe('Login Page' , () => {
    const loginPage = new LoginPage();

    beforeEach(()=>{
        loginPage.navigate();
    })

    it('Validate login page', () => {
        loginPage.validateLoginPage();
    });

    it('Validate login with various username and password', () => {
        loginPage.blankLogin();
        loginPage.blankPasswordLogin();
        loginPage.blankUserNameLogin();
        loginPage.validLogin();
    });
});