class DialysisFacilities{
    dialysisEle =(':nth-child(8) > .category-name');
    zipcodeEle =('#mat-input-16');
    zipsearchEle =('.mat-button-wrapper > .mat-icon');
    radiusinEle =('#mat-input-18');
    searchEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
   backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');

    clickDialysis(){
        cy.get(this.dialysisEle).click();
    }
    enterZipCode(zipcode){
    cy.get(this.zipcodeEle).type(zipcode);
    }
    clickZipSearch(){
        cy.get(this.zipsearchEle).click();
    }
    clickRadiusIn(){
        cy.get(this.radiusinEle).click();
    }

    clickSearch(){
        cy.get(this.searchEle).click();
    }
    clickBackBtn(){
        cy.get(this.backbtnEle).click();
    }
    


    



}
export default DialysisFacilities