// https://docs.cypress.io/api/introduction/api.html

// describe('git actions test', () => {
//   it('test', () => {
//     cy.visit('/auto-paper', { responseTimeout: 31000 })
//     // cy.get('#AuthLogOut').click()
//   })
// })

describe('Sign In test', () => {
  it('/ -> /Auth 리다이렉트 후 로그인', () => {
    cy.visit('https://kboysm.github.io/auto-paper')
    
    cy.get('form');
    cy.get('input[name="email"]').type("asd@asd.asd").should("have.value","asd@asd.asd")
    cy.get('input[name="password"]').type("123456").should("have.value","123456")
    cy.get('input[type="submit"]').click()

  })
})

describe('Sign Out test', () => {
  it('/경로에서 로그아웃 -> /Auth로 이동', () => {
    
    cy.get('#AuthLogOut').click()
    
  })
})

describe('Sign Up test', () => {
  it('회원가입', () => {
    cy.visit('https://kboysm.github.io/auto-paper')
    cy.get('.authSwitch').click()
    cy.focused()
      .should('have.id', 'AuthFormEmail')
      .type('test@asd.asd')
      .get('#AuthFormPassword')
      .type('123456')
      .get('#AuthFormSubmit').click()
    
  })
})

describe('Sign Out test', () => {
  it('회원 탈퇴', () => {
    
    cy.get('#AuthUserDelete').click()
    
  })
})