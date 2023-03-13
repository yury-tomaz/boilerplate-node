import { Role, User } from "../../../../domain/entities/users";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
    //   create 6 mocks for user
    private users: User[] = [
        {
            id: "1",
            name: "John Doe",
            email: "john@teste.com.br",
            tenant_id: "abc123",
            role: Role.ADMIN,
            createdAt: new Date(),
            updatedAt: new Date(),
            password: "Abc12345$",
        },
        {
            id: "2",
            name: "John Doe 2",
            email: "",
            tenant_id: "abc123",
            role: Role.USER,
            createdAt: new Date(),
            updatedAt: new Date(),
            password: "Abc12345$",
        },
        {
            id: "3",
            name: "John Doe 3",
            email: "",
            tenant_id: "abc123",
            role: Role.USER,
            createdAt: new Date(),
            updatedAt: new Date(),
            password: "Abc12345$",
        },

    ];

    async create(user: User ): Promise<void> {
        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User | undefined> {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    async list(): Promise<User[]> {
        return this.users;
    }

    async update(user: User): Promise<void> {
        const userIndex = this.users.findIndex(user => user.id === user.id);
        this.users[userIndex] = user;
    }

    async delete(id: string): Promise<void> {
        const userIndex = this.users.findIndex(user => user.id === id);
        this.users.splice(userIndex, 1);
    }
}