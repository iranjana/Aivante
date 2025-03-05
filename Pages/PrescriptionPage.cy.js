class PrescriptionPage{
   drugbrowseEle = (':nth-child(1) > .login-form-forgot > u');
   lettertEle =('.ant-select-selection-item');
   drugfoundEle = ('.ant-select-item-option-content');
   selectdrugEle = ('.ant-drawer-body > :nth-child(8)');
   adddrugEle = ('.ant-drawer-footer > div.ng-star-inserted > :nth-child(2) > .ng-star-inserted');
   addtodruglistEle =('.marginTop2Percent > .ng-star-inserted');
   doneadddruglEle = ('.ng-star-inserted > .mat-focus-indicator');
  // browsedrugEle= (':nth-child(1) > login-form-forgot > u');
  clickDrugBrowse(){
    cy.get(this.drugbrowseEle).click();
  }
  enterLetter(letter){
    cy.get(this.lettertEle).type(letter);
  }
  clickDrugFound(){
    cy.get(this.drugfoundEle).click();
  }
  clickSelectDrug(){
    cy.get(this.selectdrugEle).click();
  }
  clickAddDrug(){
    cy.get(this.adddrugEle).click();
  }
  clickAddToDrugList(){
    cy.get(this.addtodruglistEle).click();
  }
  clickDoneAddDrug(){
    cy.get(this.doneadddruglEle).click();
  }

    
   //}
   //verifyuUrl(expectefUrl){

  // cy.url().should('include', expectefUrl); 
  // }
   //clickBrowse(){
   // cy.get(this.browsedrugEle).click();
  // }

}

export default PrescriptionPage