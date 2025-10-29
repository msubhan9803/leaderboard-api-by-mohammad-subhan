import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "@/users/entities/user.entity";
import { Point } from "@/points/entities/point.entity";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV === 'development',
  logging: false,
  entities: [User, Point],
  migrations: [__dirname + "/../src/db/migrations/*.ts"],
});
