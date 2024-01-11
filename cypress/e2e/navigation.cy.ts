describe("Drawer Navigation", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should navigate to NippiDippi spinner", () => {
    cy.get('button[aria-label="Open drawer"]').click();

    cy.get("#spinner").click();

    cy.url().should("eq", "http://localhost:3000/spinner");

    cy.get('img[data-testid="get-result"]').should("be.visible");
  });

  it("should navigate to NippiDippi toplist", () => {
    cy.get('button[aria-label="Open drawer"]').click();

    cy.get("#toplist").click();

    cy.url().should("eq", "http://localhost:3000/toplist");

    cy.get('section[cy-test-id="toplist-container"]').should("be.visible");
  });

  it("should navigate to NippiDippi about", () => {
    cy.get('button[aria-label="Open drawer"]').click();

    cy.get("#about").click();

    cy.url().should("eq", "http://localhost:3000/about");

    cy.get('div[cy-test-id="about-page"]').should("be.visible");
  });

  it("should navigate to NippiDippi home", () => {
    cy.visit("localhost:3000/spinner");

    cy.get('button[aria-label="Open drawer"]').click();

    cy.get("#home").click();

    cy.url().should("eq", "http://localhost:3000/");

    cy.get('section[cy-test-id="home-page"]').should("be.visible");
  });
});
