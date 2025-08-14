import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source";

declare global {
  // eslint-disable-next-line no-var
  var __ds: DataSource | undefined;
}

export async function getDataSource(): Promise<DataSource> {
  if (!global.__ds) {
    global.__ds = AppDataSource;
  }
  if (!global.__ds.isInitialized) {
    await global.__ds.initialize();
  }
  return global.__ds;
}
