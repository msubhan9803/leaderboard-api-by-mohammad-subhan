import { Router } from "express";
import { container } from "tsyringe";
import { LeaderboardController } from "@/leaderboard/leaderboard.controller";

const router = Router();
const leaderboardController = container.resolve(LeaderboardController);

router.get("/", (req, res) => leaderboardController.getLeaderboard(req, res));

export default router;
