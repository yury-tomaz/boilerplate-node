import { checkPasswordStrength } from "../../domain/utils/checkPasswordStrength";
import { ErrorCodes } from "../../domain/utils/errorCodes";


describe('checkPasswordStrength', () => {
  it('should accept a strong password', () => {
    const strongPassword = 'Abc12345$';
    expect(() => checkPasswordStrength(strongPassword)).not.toThrow();
  });

  it('should reject a password without a digit', () => {
    const passwordWithoutDigit = 'Abcdefgh$';
    expect(() => checkPasswordStrength(passwordWithoutDigit)).toThrowError(ErrorCodes.PASSWORD_MISSING_DIGIT);
  });

  it('should reject a password without a lowercase letter', () => {
    const passwordWithoutLowercase = 'ABCDEFGH$';
    expect(() => checkPasswordStrength(passwordWithoutLowercase)).toThrowError(ErrorCodes.PASSWORD_MISSING_LOWERCASE);
  });

  it('should reject a password without an uppercase letter', () => {
    const passwordWithoutUppercase = 'abcdefgh$';
    expect(() => checkPasswordStrength(passwordWithoutUppercase)).toThrowError(ErrorCodes.PASSWORD_MIN_LOWERCASE);
  });

  it('should reject a password that is too short', () => {
    const passwordTooShort = 'Abcd2$';
    expect(() => checkPasswordStrength(passwordTooShort)).toThrowError(ErrorCodes.PASSWORD_MIN_LENGTH);
  });
});
