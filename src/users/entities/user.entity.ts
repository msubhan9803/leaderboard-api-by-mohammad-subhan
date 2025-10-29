import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Point } from "@/points/entities/point.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Point, (point) => point.user)
  points: Point[];

  @CreateDateColumn()
  createdAt: Date;
}
