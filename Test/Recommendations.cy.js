import MedicalEquipment from "../Pages/Medicalequipment.cy";
import PharmacyPage from "../Pages/PharmacyPage.cy"
import HomePage from "../Pages/HomePage.cy";
import LoginPage from "../Pages/LoginPage.cy";
import PreferencePage from "../Pages/PreferencePage.cy";
import PrescriptionpPage from "../Pages/PrescriptionPage.cy";
import RecLandingPage from "../Pages/RecLandingPage.cy";
import ProviderPage from "../Pages/ProviderPage.cy";
import DialysisFacilities from "../Pages/DialysisFacilities.cy";
import PlanSelection from "../Pages/PlanSelection.cy";
beforeEach(() => {
  cy.wait(1000);  // Global wait before each test runs
});
describe("create recommendation", () => {
  it("test", () => {
    cy.visit("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/login");
    const loginPage = new LoginPage();
    loginPage.enterUsername("valli@gmail.com");
    loginPage.enterPassword("sri");
    loginPage.clickLoginBtn();

    cy.wait(1000);
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
    // homePage.clickLifeExpectancy.type('96');
    //homePage.clickDateOfBirth();
    // homePage.clickYear();
    //  homePage.clickMonth();
    // homePage.clickGender();
    // homePage.clickFe();
    // homePage.clickTobaccoStatus();
    // homePage.clickTaxfillinsStatus();
    // homePage.clickZipCode();
    homePage.enterZipCode("80113");
    homePage.clickZipSearch();
    //
    //
    //
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

    cy.wait(3000)
    const dialysisFacilities = new DialysisFacilities();
    dialysisFacilities.clickDialysis();
    dialysisFacilities.enterZipCode("80113");
    cy.wait(1000)
    dialysisFacilities.clickZipSearch();
    dialysisFacilities.clickRadiusIn();
    dialysisFacilities.clickSearch();
    cy.wait(1000)
    dialysisFacilities.clickBackBtn();

    cy.wait(2000)
    const medicalEquipment = new MedicalEquipment();
    medicalEquipment.clickMedcial();
    medicalEquipment.enterZipCode("80113");
    cy.wait(1000)
    medicalEquipment.clickZipSearch();
    medicalEquipment.clickRadiusin();
    cy.wait(1000)
    medicalEquipment.clickSearch();
    cy.wait(1000)
    medicalEquipment.clickBackBtn();
    medicalEquipment.clickBackButtonToP();

    cy.wait(2000)
    const planSelection = new PlanSelection();
    // planSelection.clickPDP();
    //planSelection.clickCigna();
    // planSelection.clickDoneButton();
    planSelection.clickMedicareAdvantage();
    planSelection.clickHumana();
    planSelection.clickDone();
    planSelection.clickHumanaGold();
    planSelection.clickMedicare();

    planSelection.clickExpansionArrow();
    planSelection.clickSubmit();
    // Scroll slowly (3000ms (3 seconds) ) to bottom
    cy.scrollTo('bottom', { duration: 3000 });
    planSelection.clickGenerateDPF();
    planSelection.clickBackButton();
    planSelection.clickLongTerm();
    planSelection.clickSubmitLong();
    // Scroll slowly (3000ms (3 seconds) ) to bottom
    cy.scrollTo('bottom', { duration: 3000 });
    cy.wait(1000)
    planSelection.clickGeneratePDFLong();
    cy.wait(1000)
    planSelection.clickBackLongTerm();
    planSelection.clickAivanteLogo();


  })
})