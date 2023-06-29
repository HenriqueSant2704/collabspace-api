import { IRequestCreateUser } from "../dto/users";

class CreateUserUseCase {
  async execute({
    name,
    email,
    confirmEmail,
    password,
    confirmPassword,
    telephone,
    birtDate,
  }: IRequestCreateUser) {
    return {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birtDate,
    };
  }
}

export { CreateUserUseCase };
