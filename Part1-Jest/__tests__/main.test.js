describe('volumeiconvalue', () => {
    test('loud', () => {
      expect(`./assets/media/icons/volume-level-3.svg`).toMatch(/3/);
    });
  
    test('medium', () => {
        expect(`./assets/media/icons/volume-level-2.svg`).toMatch(/2/);
    });
    test('low', () => {
        expect(`./assets/media/icons/volume-level-1.svg`).toMatch(/1/);
    });
    test('mute', () => {
        expect(`./assets/media/icons/volume-level-0.svg`).toMatch(/0/);
    });
    
  });