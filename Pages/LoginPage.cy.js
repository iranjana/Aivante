class LoginPage {
    usernameEle = '#mat-input-0';
    passwordEle = '#mat-input-1';
    loginEle = '.mat-button-wrapper';

    //usernameEle = cy.get('input[formcontrolname="userName"]');
    //passwordEle = cy.get('input[formcontrolname="password"]');
    //loginEle = cy.contains('Log In');

    enterUsername(username) {
        cy.get(this.usernameEle).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordEle, { Timeout: 30000 }).type(password);
    }
    clickLoginBtn() {
        cy.get(this.loginEle, { timeout: 10000 }).click();
    }

}
export default LoginPage;

