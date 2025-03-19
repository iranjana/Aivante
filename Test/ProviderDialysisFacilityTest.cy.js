describe('Automation testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data)=>{

    cy.wait(3000)
    const providerDialysisFacility = new providerDialysisFacility();
    dialysisFacilities.enterDialysisFacilityName("Davita Englewood Dialysis Center");
    dialysisFacilities.enterStreet("Girard");
    dialysisFacilities.clickDialysis();
    dialysisFacilities.enterZipCode("80113");
    cy.wait(1000)
    dialysisFacilities.clickZipSearch();
    dialysisFacilities.clickCity();
    dialysisFacilities.selectCityName();
    dialysisFacilities.clickRadiusIn();
    dialysisFacilities.clickSearch();
    cy.wait(1000)
    dialysisFacilities.clickProviderFilter();
    cy.wait(1000)
    dialysisFacilities.enterDistance(10);
    cy.wait(1000)
    dialysisFacilities.clickRating();
    cy.wait(1000)
    dialysisFacilities.selectRatingFive();
    cy.wait(1000)
    dialysisFacilities.clickApplyFilter();
    cy.wait(1000)
    dialysisFacilities.clickClearFilter();
    cy.wait(1000)
    dialysisFacilities.clickBackBtn();

        })
              
    } )
    })      