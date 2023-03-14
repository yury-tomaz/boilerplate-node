import { User } from "../../../../domain/entities/user";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";


export class UserRepositoryInMemory implements IUserRepository{
    private users: User[] = [];

    async create(user: User): Promise<User> {
        this.users.push(user)

        return user;
    }
}