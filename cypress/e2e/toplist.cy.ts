/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
describe("Toplist", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/toplist");
    // Cant test API since its SSR
    // cy.intercept("GET", "/api/trpc/combination.getTopCombos").as(
    //   "getTopCombos"
    // );
    // cy.wait("@getTopCombos", { timeout: 10000 });
  });
  it("should see toplist result", () => {
    cy.get('[cy-test-id="toplist-container"]').should("be.visible");

    cy.get('img[cy-test-id="chip-image"]')
      .should("be.visible")
      .and("have.attr", "alt");
    cy.get('img[cy-test-id="dip-image"]')
      .should("be.visible")
      .and("have.attr", "alt");
  });
});
