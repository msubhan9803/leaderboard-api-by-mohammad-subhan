import { injectable } from "tsyringe";
import { userRepository } from "@/users/repositories/user.repository";

@injectable()
export class LeaderboardService {
  async getTop5Users() {
    const rows = await userRepository
      .createQueryBuilder('user')
      .leftJoin('user.points', 'point')
      .select('user.id', 'id')
      .addSelect('user.name', 'name')
      .addSelect('user.createdAt', 'createdAt')
      .addSelect('COALESCE(SUM(point.value), 0)', 'points')
      .groupBy('user.id')
      .addGroupBy('user.name')
      .addGroupBy('user.createdAt')
      .orderBy('points', 'DESC')
      .limit(5)
      .getRawMany<{ id: number; name: string; createdAt: Date; points: string | number }>();

    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      createdAt: r.createdAt,
      points: typeof r.points === 'string' ? Number(r.points) : r.points,
    }));
  }
}
