describe('Funcionalidade Login', () => {


//Funcionalidade - Login válido
it('Login Válido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
}) 

//Funcionalidade - Login Username Inválido
it('Login Username Inválido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name').type('invalid-user')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
})

//Funcionalidade - Login Password Inválido
it('Login Password Inválido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']").type('invalid-password')
    cy.get('input.btn_action').click()
})

//Funcionalidade - Login Username Vazio
it('Login Username Vazio', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
})

//Funcionalidade - Login Password Vazio
it('Login Password Vazio', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']")
    cy.get('input.btn_action').click()
})
  
})

describe('Funcionalidade AddToCart', () => {

beforeEach(   ()  => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('input#user-name').type('standard_user')
    cy.get("input[placeholder='Password']").type('secret_sauce')
    cy.get('input.btn_action').click()
})

//Funcionalidade - Adicionar item ao carrinho
it('Adicionar Item ao Carrinho', () => {
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
})

//Funcionalidade - Remover item do carrinho
it('Remover Item do Carrinho', () => {
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
})

})

describe('Funcionalidade Checkout', () => {

    beforeEach(   ()  => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('input#user-name').type('standard_user')
        cy.get("input[placeholder='Password']").type('secret_sauce')
        cy.get('input.btn_action').click()
    })

//Funcionalidade - Checkout com Sucesso
it('Checkout com Sucesso', () => {
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a').click()
    cy.xpath('/html/body/div/div[2]/div[3]/div/div[2]/a[2]').click()
    cy.get('input#first-name').type('Camila')
    cy.get('input#last-name').type('Santos')
    cy.get('input[placeholder="Zip/Postal Code"]').type('1234-000')
    cy.get('input.btn_primary.cart_button').click()
    cy.xpath('/html/body/div/div[2]/div[3]/div/div[2]/div[8]/a[2]').click()
})

})