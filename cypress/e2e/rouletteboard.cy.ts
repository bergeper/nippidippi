/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
describe("RouletteBoard Component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/spinner");
  });

  it("should fetch a combo on button click", () => {
    cy.intercept(
      "GET",
      "/api/trpc/combination.getRandomCombo?batch=1&input=%7B%7D"
    ).as("getCombo");

    cy.get('img[data-testid="get-result"]').click();

    // API
    cy.wait("@getCombo").then((interception) => {
      expect(interception.response).to.not.be.null;
      expect(interception.response).to.not.be.undefined;
      expect(interception.response?.statusCode).to.equal(200);

      const combo = interception.response?.body?.result;

      if (combo) {
        expect(combo).to.have.property("id").and.to.be.a("string");
        expect(combo).to.have.property("comboNr").and.to.be.a("string");
        expect(combo).to.have.property("name").and.to.be.a("string");
        expect(combo).to.have.property("chipId").and.to.be.a("string");
        expect(combo).to.have.property("dipId").and.to.be.a("string");
        expect(combo).to.have.property("rating").and.to.be.a("number");

        //  chip
        expect(combo.chip).to.have.property("id").and.to.be.a("string");
        expect(combo.chip).to.have.property("name").and.to.be.a("string");
        expect(combo.chip).to.have.property("imgUrl").and.to.equal("string");
        expect(combo.chip).to.have.property("flavor").and.to.be.a("string");

        // dip
        expect(combo.dip).to.have.property("id").and.to.be.a("string");
        expect(combo.dip).to.have.property("name").and.to.be.a("string");
        expect(combo.dip).to.have.property("imgUrl").and.to.equal("/none");
        expect(combo.dip).to.have.property("flavor").and.to.be.a("string");
      }
    });

    cy.get('[data-testid="combo-title"]').should("be.visible");
    cy.get('[data-testid="dip-result"]').should("be.visible");
    cy.get('[data-testid="chip-result"]').should("be.visible");
  });
});
