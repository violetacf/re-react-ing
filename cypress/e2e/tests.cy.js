import 'cypress-axe';

describe('It renders all the home elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('visits the app and checks the title', () => {
    cy.title().should('include', 'React App');
  });

  it('renders the NavBar', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');
  });

  it('renders the Header', () => {
    cy.get('[data-testid="header"]').should('be.visible');
  });

  it('renders the CreatedBy component', () => {
    cy.get('[data-testid="created-by"]').should('be.visible');
  });
});

describe('Make it react works as expected', () => {
  it('checks the Make it React button, it appears on click and disappears after 1 second', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Make it React').click();
    cy.get('[data-testid="logo"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'React Logo');
    cy.wait(1000);
    cy.get('[data-testid="logo"]').should('not.exist');
  });
});

describe('Routing to different hook examples', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('navigates to the UseEffectExample page', () => {
    cy.contains('useEffect').click();
    cy.url().should('include', '/react-hooks/useEffect');
    cy.contains('Example using useEffect').should('be.visible');
  });

  it('navigates to the UseStateExample page', () => {
    cy.contains('useState').click();
    cy.url().should('include', '/react-hooks/useState');
    cy.contains('Example using useState').should('be.visible');
  });

  it('navigates to the UseRefExample page', () => {
    cy.contains('useRef').click();
    cy.url().should('include', '/react-hooks/useRef');
    cy.contains('Example using useRef').should('be.visible');
  });

  // Add the other hooks
});

// TODO: look into accessibility tests in cypress:
// describe('Accessibility tests', () => {
//   it('has no accessibility violations', () => {
//     cy.visit('http://localhost:3000');
//     cy.injectAxe();
//     cy.checkA11y();
//   });
// });
