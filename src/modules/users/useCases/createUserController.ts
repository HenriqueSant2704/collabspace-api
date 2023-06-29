import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import { IRequestCreateUser } from "../dto/users";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birtDate,
    } = req.body as IRequestCreateUser;

    const createUserCase = new CreateUserUseCase();

    const result = createUserCase.execute({
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birtDate,
    });

    res.json(result);
  }
}

export { CreateUserController };
