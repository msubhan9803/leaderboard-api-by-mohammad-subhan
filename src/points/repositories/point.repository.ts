import AppDataSource from "@/config/data-source";
import { Point } from "@/points/entities/point.entity";

export const pointRepository = AppDataSource.getRepository(Point);
