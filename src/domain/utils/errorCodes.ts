export enum ErrorCodes {
  USER_ALREADY_EXISTS = "User already exists!",
  USER_NOT_FOUND = "User not found!",
  EMAIL_IS_NOT_VALIDATED = "Email is not validated!",
  PASSWORD_MIN_LOWERCASE = "Password must contain at least one uppercase letter",
  PASSWORD_MISSING_LOWERCASE = "Password must contain at least one lowercase letter",
  PASSWORD_MISSING_DIGIT = "Password must contain at least one digit",
  PASSWORD_MIN_LENGTH = "Password must be at least 8 characters long",
  PASSWORD_MISSING_SPECIAL_CHARACTER = "Password must contain at least one special character",
  TENANT_ALREADY_EXISTS = "Tenant already exists!",
}
