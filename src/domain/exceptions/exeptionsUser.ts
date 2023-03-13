export class WeakPasswordError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'WeakPasswordError';
    }
}

export class UserAlreadyExistsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UserAlreadyExistsError';
    }
}

export class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UserNotFoundError';
    }
}

export class TenantAlreadyExistsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TenantAlreadyExistsError';
    }
}