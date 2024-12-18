import React from 'react'
import { mount } from '@cypress/react';
import Quiz from '../../client/src/components/Quiz.tsx';

describe('<Quiz />', () => {
  it('renders start quiz button', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('contain', 'Start Quiz');
  });

  it('starts quiz when button is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('button').click();
    cy.get('h2').should('be.visible');
  });

  it('renders quiz question', () => {
    cy.mount(<Quiz />);
    cy.get('button').click();
    cy.get('h2').should('be.visible');
  });

  it('renders answer options', () => {
    cy.mount(<Quiz />);
    cy.get('button').click();
    cy.get('.alert.alert-secondary').should('be.visible');
  });

  it('increments score when correct answer is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('button').click();
    cy.get('.btn.btn-primary').first().click();
    cy.get('.alert.alert-success').should('contain', 'Your score: 1/');
  });

  it('completes quiz when all questions are answered', () => {
    cy.mount(<Quiz />);
    cy.get('button').click();
    cy.get('.btn.btn-primary').first().click();
    cy.get('.btn.btn-primary').first().click();
    cy.get('.card.p-4.text-center').should('be.visible');
  });
});