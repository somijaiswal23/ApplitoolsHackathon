export default class LoginPage {
    /**
      * Navigate through url of application
    */
    navigate(){
        cy.visit('https://demo.applitools.com/hackathon.html');
    }

    /**
      * Validate the login page
    */
    validateLoginPage(){
        cy.get('.auth-header').should('have.text', '\n        Login Form\n      ');
        cy.get(':nth-child(1) > label').should('have.text', 'Username');
        cy.get('form > :nth-child(2) > label').should('have.text', 'Password');
        cy.get(':nth-child(1) > .pre-icon').should('have.class', 'os-icon-user-male-circle');
        cy.get(':nth-child(2) > .pre-icon').should('have.class', 'os-icon-fingerprint');
        cy.get('#log-in').should('have.text', 'Log In');
        cy.get('.form-check-label').should('have.text', 'Remember Me');
        cy.get('.form-check-input').invoke('attr', 'type').then(ele => expect(ele).to.equal('checkbox'));
        cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').invoke('attr', 'src').then(
            ele => expect(ele).to.equal('img/social-icons/twitter.png')
           );
        cy.get(':nth-child(2) > img').invoke('attr', 'src').then(
            ele => expect(ele).to.equal('img/social-icons/facebook.png')
           );
        cy.get(':nth-child(3) > img').invoke('attr', 'src').then(
            ele => expect(ele).to.equal('img/social-icons/linkedin.png')
           );
    }

    /**
      * No username and password login
     */
     blankLogin(){
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#log-in').click();
        cy.get('.alert-warning').should('have.text', 'Both Username and Password must be present ');
     }

     /**
       * No password login
      */
     blankPasswordLogin(){
        cy.get('#username').clear();
        cy.get('#username').type('somi.jaiswal@conserveitiot.com');
        cy.get('#password').clear();
        cy.get('#log-in').click();
        cy.get('.alert-warning').should('have.text', 'Password must be present');
     }
     /**
       * No username login
      */
     blankUserNameLogin(){
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#password').type('Nikhil@15');
        cy.get('#log-in').click();
        cy.get('.alert-warning').should('have.text', 'Username must be present');
     }

     /**
       * Valid Login
      */
     validLogin(){
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#username').type('somi.jaiswal@conserveitiot.com');
        cy.get('#password').type('Nikhil@15');
        cy.get('#log-in').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/hackathonApp.html');
        });
     }
}