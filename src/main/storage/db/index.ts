import fs from "node:fs";
import path from "node:path";
import { app } from "electron";
import { Account } from "@main/storage/account/account.entity";
import { Clip } from "@main/storage/clip/clip.entity";
import { PlayList } from "@main/storage/playlist/playlist.entity";
import { Table } from "./table.enum";
import { TableDefault } from "./table.default";

const dataDir = app.getPath("userData");

/**
 * Write data to disk by table name.
 * @param tableName Table name.
 * @param data Object to be written to disk, should be a plain object.
 */
const writeData = async (tableName: Table, data: Account[] | Clip[] | PlayList[]): Promise<void> => {
  const filePath = path.join(dataDir, tableName);
  await fs.promises.writeFile(filePath, JSON.stringify(data), { encoding: "utf8" });
};

/**
 * Read disk data to object.
 * @param tableName Table name.
 * @returns Parsed object from disk.
 */
const readData = async (
  tableName: Table
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const filePath = path.join(dataDir, tableName);

  try {
    // Check if the file exists first.
    await fs.promises.access(filePath, fs.constants.F_OK);
  } catch {
    // Otherwise, create the file with default values.
    await fs.promises.writeFile(filePath, JSON.stringify(TableDefault[tableName]), { encoding: "utf8" });
  }

  const data = await fs.promises.readFile(filePath, "utf8");
  return JSON.parse(data);
};

export { writeData, readData };
