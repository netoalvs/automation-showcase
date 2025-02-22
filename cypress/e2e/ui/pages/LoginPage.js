class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com');
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('#login-button').click();
    }
  
    getErrorMessage() {
      return cy.get('[data-test="error"]');
    }
  }
  
  export default new LoginPage();