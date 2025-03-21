
import ProviderDialysisFacility from "../Pages/ProviderDialysisFacility.cy";
import LoginPage from "../Pages/LoginPage.cy";
import HomePage from "../Pages/HomePage.cy";
import PreferencePage from "../Pages/PreferencePage.cy";
import PrescriptionpPage from "../Pages/PrescriptionPage.cy";
import RecLandingPage from "../Pages/RecLandingPage.cy";
import ProviderPage from "../Pages/ProviderPage.cy";
import PharmacyPage from "../Pages/PharmacyPage.cy"

describe('ProviderDialysisFacility', () => {
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

        cy.fixture('LoginFixture').then((data) => {
            const loginPage = new LoginPage();
            loginPage.enterUsername(data.username);
            loginPage.enterPassword(data.password);
            loginPage.clickLoginBtn();

            cy.wait(1000);
        });

        //Steps to go to the dialysis page
        const landingPage = new RecLandingPage();
        landingPage.clickRecBtn();

        //cy.wait(3000);
        cy.document().should('have.property', 'readyState', 'complete');
        const homePage = new HomePage();
        homePage.enterRecEmail("rama@gmail.com");
        homePage.clickHealthProfile();
        cy.wait(1000);
        homePage.selectHealthType();
        homePage.enterRecName("Ram");
        homePage.enterZipCode("80113");
        homePage.clickZipSearch();
        cy.wait(1000);
        cy.scrollTo('bottom');
        homePage.clickNextBtn();

        cy.wait(1000)
        const preferencePage = new PreferencePage();
        preferencePage.clickSeePrice();
        preferencePage.clickNextBtn();

        cy.wait(2000)
        const prescriptionPage = new PrescriptionpPage();
        prescriptionPage.clickDrugBrowse();
        cy.wait(1000)
        prescriptionPage.enterLetter("B");
        prescriptionPage.clickDrugFound();
        prescriptionPage.clickSelectDrug();
        prescriptionPage.clickAddDrug();
        prescriptionPage.clickAddToDrugList();
        prescriptionPage.clickDoneAddDrug();

        cy.wait(1000)
        const pharmacyPage = new PharmacyPage();
        pharmacyPage.clickPharmacySelect();
        cy.wait(1000)
        pharmacyPage.clickNextBtn();

        const providerPage = new ProviderPage();
        providerPage.clickProviderBtn();

        cy.log("Entering Dialysis Facility Page");
        cy.wait(3000)

    });

    it('TC-1 Enter Dialysis Facility Name', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterDialysisFacilityName("Davita Englewood Dialysis Center");
        providerDialysisFacility.clickSearch();
        cy.log("Dialysis Facility Name - Passed");
        cy.wait(1000)
    });

    it('TC-2 dialysisfacility street', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterStreet("Girard");
        cy.wait(1000)
    });

    it('TC-3 dialysisfacility clickdialysis', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickDialysis();
        cy.wait(1000)
    });

    it('TC-4 dialysisfacility centerzipcode', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterZipCode("80113");
        cy.wait(1000)
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

    it('TC-8 dialysisfacility clickradius', () => {
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

});
