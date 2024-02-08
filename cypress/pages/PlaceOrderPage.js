class PlaceOrderPage {
    elements = {
        phonesMenuButton: () => cy.get(`[onclick="byCat('phone')"]`),
        cellPhoneSamsung: () => cy.xpath('//*[contains(text(),"Samsung galaxy s6")]'),
        cellPhoneNokia: () => cy.xpath('//*[contains(text(),"Nokia lumia 1520")]'),
        addToCartButton: () => cy.xpath('//*[contains(text(),"Add to cart")]'),
        homeButton: () => cy.xpath('//*[contains(text(),"Home")]'),
        cartButton: () => cy.xpath('//*[contains(text(),"Cart")]'),
        deleteItemButton: () => cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a'),
        placeOrderButton: () => cy.get('#page-wrapper > div > div.col-lg-1 > button'),
        inputNameModal: () => cy.get('#name'),
        inputCountyModal: () => cy.get('#country'),
        inputCityModal: () => cy.get('#city'),
        inputCreditCardModal: () => cy.get('#card'),
        inputMonthModal: () => cy.get('#month'),
        inputYearModal: () => cy.get('#year'),
        purchaseButton: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')

    };

    addCellphoneCart(username) {
        this.elements.phonesMenuButton().click();
        this.elements.cellPhoneSamsung().click();
        this.elements.addToCartButton().click();
        cy.on('window:alert', (t) => {
            expect(t).contains("Product added.");
        })
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Product added.');
        })
        this.elements.homeButton().click();

        this.elements.phonesMenuButton().click();
        this.elements.cellPhoneNokia().click();
        this.elements.addToCartButton().click();

        cy.on('window:alert', (t) => {
            expect(t).contains("Product added.");
        })
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Product added.');
        })
        this.elements.cartButton().click();
        this.elements.deleteItemButton().click();
        cy.wait(2000)
    }

    populatePlaceOrderModal() {
        this.elements.placeOrderButton().click()
        this.elements.inputNameModal().type("Helder Fernandes")
        this.elements.inputCountyModal().type("Brazil")
        this.elements.inputCityModal().type("Cajamar")
        this.elements.inputCreditCardModal().type("5499250901730430")
        this.elements.inputMonthModal().type("April")
        this.elements.inputYearModal().type("2030")
        this.elements.purchaseButton().click()
    }

}

export const placeOrderPage = new PlaceOrderPage();