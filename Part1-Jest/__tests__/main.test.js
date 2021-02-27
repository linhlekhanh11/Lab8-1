const formatVolumeIconPath = require('../assets/scripts/main');
const sum = require('../assets/scripts/main');
describe('volumeiconvalue', () => {
    test('loud', () => {
      expect(formatVolumeIconPath(69)).toMatch(/3/);
    });
  
    test('medium', () => {
        expect(formatVolumeIconPath(34)).toMatch(/2/);
    });
    test('low', () => {
        expect(formatVolumeIconPath(12)).toMatch(/1/);
    });
    test('mute', () => {
        expect(formatVolumeIconPath(0)).toMatch(/0/);
    });
    
  });