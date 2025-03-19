describe('Automation testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data)=>{
            cy.wait(2000)
            const providerMedicalEquipment = new providerMedicalEquipment();
          providerMedicalEquipment.clickMedcial();
           providerMedicalEquipment.enterZipCode("80113");
            cy.wait(1000)
            providerMedicalEquipment.clickZipSearch();
            providerMedicalEquipment.clickRadiusin();
            cy.wait(1000)
            providerMedicalEquipment.clickSearch();
            cy.wait(1000)
            providerMedicalEquipment.clickBackBtn();
            providerMedicalEquipment.clickBackButtonToP();

})
              
} )
})