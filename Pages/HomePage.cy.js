class HomePage{
recemailEle = '#mat-input-3';
healthprofileEle ='.form-field-container-col2 > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
healthtypeEle = ('#mat-option-4 > .mat-option-text');
//besthealthEle = '#mat-select-value-3 > .mat-select-value-text > .mat-select-min-line';
recnameEle = '#mat-input-4';
// ='.#mat-inpu
//dateofbirthEle =':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
//yearEle = ':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
//monthEle = '#mat-input-6'
//genderEle = ':nth-child(5) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
//feEle = '#mat-select-value-5 > .mat-select-value-text > .mat-select-min-line';
//tobaccostatusEle = ':nth-child(6) > .mat-radio';
//taxfillinsstatusEle =':nth-child(8) > .mat-radio';
// > .mat-form-field-flex';
zipcodeEle ='#mat-input-8';
zipsearchEle ='.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon';
nextbtnEle = '.form-wrapper > .mat-raised-button';


enterRecEmail(recemail){
    cy.get(this.recemailEle).type(recemail);
}
clickHealthProfile(){
    cy.get(this.healthprofileEle).click();
}
selectHealthType(){
    cy.get(this.healthtypeEle).click();
}

enterRecName(recname){
    cy.get(this.recnameEle).type(recname,{force:true});
}


//clickDateOfBirth(){
    //cy.get(this.dateofbirthEle).click();
//}
//clickYear(){
    //cy.get(this.yearEle).click();
//}
//clickMonth(){
    //cy.get(this.monthEle).click();
//}
//clickGender(){
    //cy.get(this.genderEle).click();
//}
//clickFe(){
    //cy.get(this.feEle).click();
//}
//clickTobaccoStatus(){
   // cy.get(this.tobaccostatusEle).click();
//}

//clickTaxfillinsStatus(){
   // cy.get(this.taxfillinsstatusEle).click();
//}
//
//
//
//
enterZipCode(zipcode){
    cy.get(this.zipcodeEle).type(zipcode,{force:true});
}

clickZipSearch(){
    cy.get(this.zipsearchEle).click({force:true});
}
clickNextBtn(){
    cy.get(this.nextbtnEle).click({force:true});
}













}
export default HomePage
