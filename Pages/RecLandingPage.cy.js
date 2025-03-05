class RecLandingPage{
landingPageEle=  '.button-container > .mat-focus-indicator > .mat-button-wrapper';

clickRecBtn(){
    cy.get(this.landingPageEle).click();
}








}
export default RecLandingPage;