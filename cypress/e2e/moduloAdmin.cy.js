describe("Admin", { scrollBehavior: false }, function(){ 
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.contains('Time at Work').should('be.visible');
        cy.contains('Admin').click()   
        
    
    })

    it("search username", () => {
        cy.get('input')
            .eq(1)
            .type('Admin');

        cy.get('[type="submit"]')
            .click();

        cy.get('[role="cell"]')
            .contains('Admin')
            .should('be.visible')
    });

    it("search User rol", () => {
        cy.get('.oxd-select-wrapper').eq(0).click().contains('ESS').click();
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.get('[role="cell"]').contains('ESS').should('be.visible')
    });

  
    it("should Nombre del empleado", () => {
        cy.get('[placeholder="Type for hints..."]').type('Israa Shtayeh');
        cy.get('[role="listbox"]').wait(3000).click();
        cy.contains('Search').click({force: true});
        cy.contains('Israa Shtayeh').should('be.visible');
     
    })

    it("status", () => {{ scrollBehavior: false }
        cy.get('.oxd-select-wrapper').eq(1).click()
        cy.contains('Disabled').click();
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        cy.contains('No Records Found').should('be.visible')
    })

});

    