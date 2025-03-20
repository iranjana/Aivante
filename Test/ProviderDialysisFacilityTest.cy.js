import ProviderDialysisFacility from "../Pages/ProviderDialysisFacility.cy";
describe('providerdialysisfacility', () => {
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data) => {

            it('TC-1 dialysisfacility name', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                dialysisFacility.enterDialysisFacilityName("Davita Englewood Dialysis Center");
            });

            it('TC-2 dialysisfacility street', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
               providerDialysisFacility.enterStreet("Girard");
            });

            it('TC-3 dialysisfacility clickdialysis', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                providerDialysisFacility.clickDialysis();
            });

            it('TC-4 dialysisfacility centerzipcode', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                providerDialysisFacility.enterZipCode("80113");
            });

            it('TC-5 dialysisfacility clickzip search', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.clickZipSearch();
            });

            it('TC-6 dialysisfacility clickcity', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                providerDialysisFacility.clickCity();
            });

            it('TC-7 dialysisfacilitys electcityname', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                providerDialysisFacility.selectCityName();
            });

            t('TC-8 dialysisfacility clickradius', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                providerDialysisFacility.clickRadiusIn();
            });

            it('TC-9 dialysisfacility clicksearch', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                providerDialysisFacility.clickSearch();
            });

            it('TC-10 dialysisfacility clickproviderfilter', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.clickProviderFilter();
            });

            it('TC-11 dialysisfacility enterdistance', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.enterDistance(10);
            });

            it('TC-11 dialysisfacility clickrating', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.clickRating();
            });

            it('TC-12 dialysisfacility select ratingfive', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.selectRatingFive();
            });

            it('TC-13 dialysisfacility clickapply filter', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.clickApplyFilter();
            });

            it('TC-13 dialysisfacility clickclear filter', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
                providerDialysisFacility.clickClearFilter();
            });

            it('TC-14 dialysisfacility clickback button', () => {
                const providerDialysisFacility = new ProviderDialysisFacility();
                cy.wait(1000)
               providerDialysisFacility.clickBackBtn();
            });

        })

    })
})      
