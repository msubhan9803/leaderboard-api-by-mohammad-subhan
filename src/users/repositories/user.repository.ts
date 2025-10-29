import AppDataSource from "@/config/data-source";
import { User } from "@/users/entities/user.entity";

export const userRepository = AppDataSource.getRepository(User);
