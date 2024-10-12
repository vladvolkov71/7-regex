import Validator from '../app.js';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
      validator = new Validator();
    });

    it('should validate valid usernames', () => {
      expect(validator.validateUsername('my_username123')).toBe(true);
      expect(validator.validateUsername('user-123')).toBe(true);
      expect(validator.validateUsername('user_123')).toBe(true);
    });

    it('should reject usernames starting with digits', () => {
      expect(validator.validateUsername('123user')).toBe(false);
      expect(validator.validateUsername('1username')).toBe(false);
    });

    it('should reject usernames with consecutive digits', () => {
      expect(validator.validateUsername('user1234')).toBe(false);
      expect(validator.validateUsername('user_1234')).toBe(false);
    });

    it('should reject usernames ending with underscore or hyphen', () => {
      expect(validator.validateUsername('user_')).toBe(false);
      expect(validator.validateUsername('user-')).toBe(false);
    });
  });