describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  
  it('Image and sound sources change when you select party horn radio button', () => {
    cy.get('#radio-party-horn').click();

    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });

    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  //Check slider changes when input changes
  it ('Slider changes when input number changes', () => {
    cy.get('#volume-number')
    .clear()
    .type('75');

    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });


  //input number changes when slider changes
  it('Input changes when slider input changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');

    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  //Check if the volume of audio changes when slider changes
  it('Volume of audio element changes when slider input changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');

    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Volume image changes when increasing volume level from 0', () => {
    cy.get('#volume-slider')
    .invoke('val', 0).trigger('input')

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    });
  })

  it('Volume image changes when increasing volume level from 1 to 33', () => {
    cy.get('#volume-slider')
    .invoke('val', 1).trigger('input')
    .invoke('val', 33).trigger('input');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
  })

  it('Volume image changes when increasing volume level from 34 to 66', () => {
    cy.get('#volume-slider').
    invoke('val', 34).trigger('input')
    .invoke('val', 66).trigger('input');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
  });

  it('Volume image changes when increasing volume level from 66 to 100', () => {
    cy.get('#volume-slider')
    .invoke('val', 67).trigger('input')
    .invoke('val', 100).trigger('input');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    });
  });

  it('Honk button is disabled when the textbox input is a empty', () => {
    cy.get('#volume-number').clear();

    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  if("Honk button is disabled when the textbox input is non-number", () => {
    cy.get('#volume-number').clear().type('e');
    // cy.get('#volume-number').invoke('val', a).trigger('input');

    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });
  

  it('Error is shown when you type a number outside of given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('112');

    cy.get('input:invalid').should('have.length', 1);
  });
});