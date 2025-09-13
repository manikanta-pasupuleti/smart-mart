describe('Smart Mart Art App', () => {
  it('loads dashboard', () => {
    cy.visit('/');
    cy.contains('Smart Mart Art Project Management Tool');
  });
});
