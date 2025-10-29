import { Router } from "express";
import { container } from "tsyringe";
import { PointsController } from "@/points/points.controller";

const router = Router();
const pointsController = container.resolve(PointsController);

router.post("/", (req, res) => pointsController.addPoints(req, res));

export default router;
