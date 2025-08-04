import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/Users";
import { env } from "@/lib/env";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: env.DATABASE_URL,
  synchronize: true,   // auto-create tables in dev
  logging: false,
  entities: [User],
});
