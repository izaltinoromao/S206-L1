describe("Criando cenário de teste para o site globalsqa", ()=>{

    it("Caso de teste: Registrando um usuário no site com sucesso", () => {
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('.btn-link').click()
      cy.get('#firstName').type("Tiago")
      cy.get('#Text1').type("Tiago")
      cy.get('#username').type("Tiago")
      cy.get('#password').type("123")
      cy.get('.btn-primary').click()
  
      cy.get('.ng-binding').should('contain.text', "Registration successful")
    })
    
    it("Caso de teste: Registrando um usuário no site com falha - faltando senha", () => {
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/register")
      cy.get('#firstName').type("Tiago")
      cy.get('#Text1').type("Tiago")
      cy.get('#username').type("Tiago")
      cy.get('#password').type("123")
      cy.get('#password').clear()
  
      cy.get('.has-error > .help-block').should('have.text', "Password is required")
      cy.get('.btn-primary').should('be.disabled')
    })
  
    it("Caso de teste: Registrando um usuário no site com sucesso e logando", () => {
      let info = criar_usuario()
      cy.get('#username').type(info[0])
      cy.get('#password').type(info[1])
      cy.get('.btn-primary').click()
  
      cy.get('h1.ng-binding').should('contain.text', info[0])
    })
  
    it("Caso de teste: Realizando logout", () => {
      let info = criar_usuario()
      cy.get('#username').type(info[0])
      cy.get('#password').type(info[1])
      cy.get('.btn-primary').click()
  
      cy.get('h1.ng-binding').should('contain.text', info[0])
  
      cy.get('.btn').click()
      
    })
    
    it("Caso de teste: Login sem senha", () => {
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('#username').type("teste")
      cy.get('#password').type("123")
      cy.get('#password').clear()
      cy.get('.has-error > .help-block').should('have.text',"Password is required")
    })
  
    it
  
  })
  
  function criar_usuario(){
  
    let horas = new Date().getHours().toString()
    let minutos = new Date().getMinutes().toString()
    let segundos = new Date().getSeconds().toString()
  
    let user = horas + minutos + segundos + 'Id'
    let senha = horas + minutos + segundos + 'Senha'
  
    let user_info = [user, senha]
  
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
  
    cy.get('.ng-binding').should('contain.text', "Registration successful")
  
    return user_info
  }
  
  function is_login(){
    cy.get('h2').should('have.text', 'Login')
  }