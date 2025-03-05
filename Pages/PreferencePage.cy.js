class PreferencePage{
    seepriceEle = '#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle';
    nextbtnEle ='.preference-wrapper > .button-wrapper > .mat-focus-indicator > .mat-button-wrapper';


clickSeePrice(){
    cy.get(this.seepriceEle).click();
}
clickNextBtn(){
    cy.get(this.nextbtnEle).click();
}







}
export default PreferencePage