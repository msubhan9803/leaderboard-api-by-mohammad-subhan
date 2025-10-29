import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "@/users/entities/user.entity";

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => User, user => user.id)
  user: User;
}
