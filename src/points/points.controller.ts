import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { PointService } from "@/points/services/point.service";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class PointsController {
  constructor(private pointService: PointService) {}

  async addPoints(req: Request, res: Response) {
    try {
      const { userId, value } = req.body;
      const point = await this.pointService.addPoints(userId, value);

      res.status(StatusCodes.CREATED).json(point);
    } catch (error: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }
}
