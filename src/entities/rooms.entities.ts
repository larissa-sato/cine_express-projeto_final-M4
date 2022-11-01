import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cinema } from "./cine.entities";
import { Sessions } from "./sessions.entities";

@Entity("rooms")
export class Rooms {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  capacity: string;

  @ManyToOne(() => Cinema)
  cinema: Cinema;
}
