import { faker } from '@faker-js/faker';
import { UserRepositoryInMemory } from '../../../../application/infrastructure/repositories/inMemory/userRepository';
import { CreateUserDTO, CreateUserUseCase } from './CreateUserUseCase';

describe("create User", () => {
    let useCase: CreateUserUseCase;
    let repository: UserRepositoryInMemory;

    beforeAll(()=>{
        repository = new UserRepositoryInMemory();
        useCase = new CreateUserUseCase(repository);
    })

    it("Should be possible to create a user", async ()=>{
        const data: CreateUserDTO = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        const user = await useCase.execute(data);

        expect(user).toHaveProperty("id");
        expect(user).toHaveProperty("name", data.name);
        expect(user).toHaveProperty("email", data.email);
        expect(user).toHaveProperty("password");
        expect(user).toHaveProperty("createdAt");

    })



})