class MedicalEquipment{
    medicalELe = (':nth-child(9) > .category-name');
    zipcodeEle = ('#mat-input-26');
    zipsearchEle = ('.mat-button-wrapper > .mat-icon');
    radiusinEle = ('#mat-input-27');
    searchEle = ('.display-flex > .mat-focus-indicator > .mat-button-wrapper');
    backbtnEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');
    backbuttontopEle = ('.button-wrapper > .mat-focus-indicator > .mat-button-wrapper');
    clickMedcial(){
        cy.get(this.medicalELe).click();
    }
    enterZipCode(zipcode){
        cy.get(this.zipcodeEle).type(zipcode);
    }
    clickZipSearch(){
        cy.get(this.zipsearchEle).first().click({force:true});
    }
    clickRadiusin(){
        cy.get(this.radiusinEle).click();
    }
    
    clickSearch(){
        cy.get(this.searchEle).click();
    }
   clickBackBtn(){
        cy.get(this.backbtnEle).click();
    }
    clickBackButtonToP(){
        cy.get(this.backbuttontopEle).click();
    }








}
export default MedicalEquipment
