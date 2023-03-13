import { WeakPasswordError } from "../exceptions/exeptionsUser";
import { ErrorCodes } from "./errorCodes";

export function checkPasswordStrength(password: string): void {
  const MIN_LENGTH = 8;
  const MIN_UPPERCASE = 1;
  const MIN_LOWERCASE = 1;
  const MIN_DIGITS = 1;
  const MIN_SPECIAL_CHARACTERS = 1;

  if (password.length < MIN_LENGTH) {
    throw new WeakPasswordError(ErrorCodes.PASSWORD_MIN_LENGTH);
  }

  const UPPERCASE_REGEX = /[A-Z]/g;
  const LOWERCASE_REGEX = /[a-z]/g;
  const DIGIT_REGEX = /[0-9]/g;
  const SPRECIAL_CHARACTER_REGEX = /[\W_]/g;

  const uppercaseMatches = password.match(UPPERCASE_REGEX);
  const lowercaseMatches = password.match(LOWERCASE_REGEX);
  const digitMatches = password.match(DIGIT_REGEX);
  const specialCharacterMatches = password.match(SPRECIAL_CHARACTER_REGEX);

  function throwWeakPasswordError(errorCode: string) {
    throw new WeakPasswordError(errorCode);
  }

  if (uppercaseMatches === null || uppercaseMatches.length < MIN_UPPERCASE) {
    throwWeakPasswordError(ErrorCodes.PASSWORD_MIN_LOWERCASE);
  }

  if (lowercaseMatches === null || lowercaseMatches.length < MIN_LOWERCASE) {
    throwWeakPasswordError(ErrorCodes.PASSWORD_MISSING_LOWERCASE);
  }

  if (digitMatches === null || digitMatches.length < MIN_DIGITS) {
    throwWeakPasswordError(ErrorCodes.PASSWORD_MISSING_DIGIT);
  }
  if (specialCharacterMatches === null || specialCharacterMatches.length < MIN_SPECIAL_CHARACTERS) { // nova validação para caracteres especiais
    throwWeakPasswordError(ErrorCodes.PASSWORD_MISSING_SPECIAL_CHARACTER);
  }
}
