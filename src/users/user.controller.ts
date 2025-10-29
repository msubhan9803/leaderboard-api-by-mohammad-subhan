import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { UserService } from "@/users/services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userService.createUser(req.body.name);
      res.status(StatusCodes.CREATED).json(user);
    } catch (error: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }
}
