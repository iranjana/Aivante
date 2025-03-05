class PlanSelection{
   // pdpEle   =  ('.selected-container > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper');
    //cignaEle = ('#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container');
   // donebuttonEle = ('.button-container > .mat-focus-indicator > .mat-button-wrapper');
    medicareadvantageEle = (':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper');
    humanaEle = ('#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container');
    doneEle =('.button-container > .mat-focus-indicator > .mat-button-wrapper');
    humanagoldEle = ('.mat-checkbox-inner-container');
    medicareEle = ('.button-container > :nth-child(1) > .mat-button-wrapper');
    expansionarrowEle = ('.mat-expansion-indicator');
    submitEle = (':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper');
    generatepdfEle = ('.ng-star-inserted > .mat-button-wrapper');
    backbuttonEle = ('.button-wrapper > :nth-child(1) > .mat-button-wrapper');
    longtermEle = ('.button-container > :nth-child(2) > .mat-button-wrapper');
    submitlongEle = (':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper');
    generatepdflongEle = ('.ng-star-inserted > .mat-button-wrapper');
    backblongtermEle = ('.button-wrapper > :nth-child(1) > .mat-button-wrapper');
    aivantelogoEle = ('img');

   // clickPDP(){
      //  cy.get(this.pdpEle).click();
  //  }
   // clickCigna(){
        //cy.get(this.cignaEle).click();
   // }

   // clickDoneButton(){
       // cy.get(this.donebuttonEle).click();
   // }

    
    
    
    clickMedicareAdvantage(){
        cy.get(this.medicareadvantageEle).click();
    }
    clickHumana(){
        cy.get(this.humanaEle).click();
    }
    clickDone(){
        cy.get(this.doneEle).click();

    }
    clickHumanaGold(){
        cy.get(this.humanagoldEle).click({force:true,multiple:true});
    }
    clickMedicare(){
        cy.get(this.medicareEle).click();
    }
    clickExpansionArrow(){
        cy.get(this.expansionarrowEle).click();
    }

    clickSubmit(){
        cy.get(this.submitEle).click();
    }
    clickGenerateDPF(){
        cy.get(this.generatepdfEle).click({force:true,multiple:true});
    }

    clickBackButton(){
        cy.get(this.backbuttonEle).click();
    }
    clickLongTerm(){
        cy.get(this.longtermEle).click();
    }

    clickSubmitLong(){
        cy.get(this.submitlongEle).click();
    }
    clickGeneratePDFLong(){
        cy.get(this.generatepdflongEle).click();
    }
    clickBackLongTerm(){
        cy.get(this.backblongtermEle).click();
    }
    clickAivanteLogo(){
        cy.get(this.aivantelogoEle).click();
    }







}
export default PlanSelection