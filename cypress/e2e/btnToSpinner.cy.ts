/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
describe("Button To Spinner", () => {
  it("should click btn and go to spinner-page", () => {
    cy.visit("localhost:3000");

    cy.get('a[cy-test-id="cy-to-spinner"]').should("be.visible");

    // This test doest not work on a Mui Button...
    // changed to link in page to test it.
    // it works.
    cy.get('a[cy-test-id="cy-to-spinner"]').click();

    cy.url().should("eq", "http://localhost:3000/spinner");
  });
});
