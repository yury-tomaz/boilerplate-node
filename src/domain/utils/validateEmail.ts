import { UserAlreadyExistsError } from "../exceptions/exeptionsUser";
import { ErrorCodes } from "./errorCodes";

export function isValidEmail(email: string): boolean {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!EMAIL_REGEX.test(email)) throw new UserAlreadyExistsError(ErrorCodes.EMAIL_IS_NOT_VALIDATED);

  return true;

}

