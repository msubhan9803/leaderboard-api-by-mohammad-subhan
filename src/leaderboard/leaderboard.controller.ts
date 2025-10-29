import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { LeaderboardService } from "@/leaderboard/services/leaderboard.service";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class LeaderboardController {
  constructor(private leaderboardService: LeaderboardService) {}

  async getLeaderboard(req: Request, res: Response) {
    try {
      const users = await this.leaderboardService.getTop5Users();

      res.status(StatusCodes.OK).json(users);
    } catch (error: any) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }
}
