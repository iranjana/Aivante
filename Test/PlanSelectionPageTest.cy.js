describe('Automation testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data)=>{

            cy.wait(2000)
    const planSelectionPage = new PlanSelectionPage();
    // planSelection.clickPDP();
    //planSelection.clickCigna();
    // planSelection.clickDoneButton();
    planSelectionPage.clickMedicareAdvantage();
    planSelectionPage.clickHumana();
    planSelectionPage.clickDone();

        })
              
    } )
    })      