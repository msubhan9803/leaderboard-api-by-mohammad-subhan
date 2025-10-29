import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { UserService } from "@/users/services/user.service";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const user = await this.userService.createUser(name);

      res.status(StatusCodes.CREATED).json(user);
    } catch (error: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }
}
