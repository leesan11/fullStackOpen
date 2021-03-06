describe('BlogApp ', function() {
    it('front page can be opened, able to login and add new blog', function() {
      cy.visit('http://localhost:3000')
        cy.get('#username')
            .type('test2')
        cy.get('#password')
            .type('test2')
        cy.contains('Login')
            .click()
        
      cy.contains('New Blog')
        .click()
        cy.get('#title')
            .type('cypress')
        cy.get('#author')
            .type('cypress')
        cy.get('#url')
            .type('cypress')
        cy.contains('Add Blog')
        .click()
        cy.contains('cypress')
    })
  })