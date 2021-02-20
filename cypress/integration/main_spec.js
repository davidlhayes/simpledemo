describe('Main Test of DynamoDB and S3 interaction', () => {
  it('Open simpledemo local page', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name')
      .type('Test Template 1')
      .should('have.value', 'Test Template 1');

    cy.get('#description')
      .type('Description for Test Template 1')
      .should('have.value', 'Description for Test Template 1');

    cy.get('#create-template').click();

    cy.get('#show-template').click();

    cy.get('.template-name')
      .should('have.text', 'Test Template 1');

    cy.get('.template-description')
      .should('have.text', 'Description for Test Template 1');

    cy.get('#delete-template').click();

    cy.get('#sdata')
      .type('{')
      .type('{enter}')
      .type('  "content": [')
      .type('{enter}')
      .type('     {')
      .type('{enter}')
      .type('        "component_type": "header1",')
      .type('{enter}')
      .type('        "label": "Header",')
      .type('{enter}')
      .type('        "x": 10,')
      .type('{enter}')
      .type('        "y": 10,')
      .type('{enter}')
      .type('        "scale": 15')
      .type('{enter}')
      .type('     },')
      .type('{enter}')
      .type('     {')
      .type('{enter}')
      .type('        "component_type": "divider",')
      .type('{enter}')
      .type('        "label": "none",')
      .type('{enter}')
      .type('        "style": "double",')
      .type('{enter}')
      .type('        "x": 10,')
      .type('{enter}')
      .type('        "y": 10,')
      .type('{enter}')
      .type('        "scale": 15')
      .type('{enter}')
      .type('     }')
      .type('{enter}')
      .type('   ]')
      .type('{enter}')
      .type('}');

    cy.get('#upload-content').click();
    cy.pause();
    cy.get('#show-content').click();
    // cy.pause();
    cy.get('#display-content')
      .should('have.text', 'header1');
    cy.get('#remove-content').click();
    cy.get('#show-content').click();
  });


});
