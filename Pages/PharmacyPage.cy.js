class PharmacyPage{
    pharmacyselectEle = ('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container');
    nextbtnEle = ('.button-wrapper > .mat-button-wrapper');

clickPharmacySelect(){
    cy.get(this.pharmacyselectEle).click();
}
clickNextBtn(){
    cy.get(this.nextbtnEle).click();
}

}

export default PharmacyPage