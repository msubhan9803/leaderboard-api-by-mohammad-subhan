import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "@/users/user.controller";

const router = Router();
const userController = container.resolve(UserController);

router.post("/", (req, res) => userController.createUser(req, res));

export default router;