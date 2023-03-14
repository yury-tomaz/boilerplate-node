import { User } from "../../../entities/user";
import { IUserRepository } from "../../../repository/IUserRepository";

export interface CreateUserDTO{
    name: string;
    email: string;
    password: string;
}
export class CreateUserUseCase{
    constructor(
        private IUserRepository: IUserRepository
    ){}

    async execute(data: CreateUserDTO){
        const user = new User({
            name: data.name,
            email: data.email,
            password: data.password
        });

        const response = await this.IUserRepository.create(user);

        return response
    }
}