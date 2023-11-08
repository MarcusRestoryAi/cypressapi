describe('Hämta JSON data från source', () => {
  it('Hämta data från .json fil och placera värdet i div tag', () => {
    cy.visit('index.html')

    cy.get("#btnFetchJsonFile").click()

    cy.get("#output").should("contain.text", "Marcus")
    cy.get("#status").should("contain.text", "success")
  })

  it('Hämta data från ISS API och placera värdet i div tag', () => {
    cy.visit('index.html')

    cy.get("#btnFetchISSData").click()

    cy.get("#status").should("contain.text", "success")
  })
})