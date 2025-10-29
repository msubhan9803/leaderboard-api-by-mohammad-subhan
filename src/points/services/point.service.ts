import { injectable } from "tsyringe";
import { pointRepository } from "@/points/repositories/point.repository";
import { Point } from "@/points/entities/point.entity";

@injectable()
export class PointService {
  constructor() {}

  async addPoints(userId: number, value: number): Promise<Point> {
    const point = pointRepository.create({ user: { id: userId }, value });
    return await pointRepository.save(point);
  }
}
