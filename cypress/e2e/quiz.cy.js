describe('Quiz component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('starts the quiz', () => {
    cy.get('[data-testid="start-quiz-button"]').click();
    cy.get('[data-testid="quiz-question"]').should('be.visible');
  });

  it('submits an answer', () => {
    cy.get('[data-testid="start-quiz-button"]').click();
    cy.get('[data-testid="answer-button"]').click();
    cy.get('[data-testid="next-question"]').should('be.visible');
  });
});