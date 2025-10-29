import { injectable } from "tsyringe";
import { userRepository } from "@/users/repositories/user.repository";
import { User } from "@/users/entities/user.entity";

@injectable()
export class UserService {
  constructor() {}

  /**
   * Creates a new user with the specified name.
   * Throws an error if a user with the same name already exists.
   *
   * @param name - The name of the user to create.
   * @returns The newly created User entity.
   */
  async createUser(name: string): Promise<User> {
    const existing = await userRepository.findOne({ where: { name } });

    if (existing) throw new Error("User already exists");
    const user = userRepository.create({ name });

    return await userRepository.save(user);
  }
}
