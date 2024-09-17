import {
  jest,
  describe,
  test,
  expect,
  beforeEach,
} from "@jest/globals";
import { Table } from "@main/storage/db/table.enum";
import { Account } from "@main/storage/account/account.entity";
import { Clip } from "@main/storage/clip/clip.entity";
import { PlayList } from "@main/storage/playlist/playlist.entity";
import { TableDefault } from "@main/storage/db/table.default";
import { AccountService } from "@main/storage/account/account.service";
import { initialize } from "@main/storage";

jest.mock("@main/storage/db", () => {
  let db = "";

  return ({
    initialize: async () => {
      db = "{}";
    },
    writeData: async (tableName: Table, data: Account[] | Clip[] | PlayList[]) => {
      let currentDb = JSON.parse(db);
      currentDb = {
        ...currentDb,
        [tableName]: data,
      };
      db = JSON.stringify(currentDb);
    },
    readData: async (tableName: Table) => {
      const currentDb = JSON.parse(db);
      return currentDb[tableName] ?? TableDefault[tableName];
    },
  });
});


describe("Storage", () => {
  beforeEach(async () => {
    await initialize();
  });

  test("Create and Get Account", async () => {
    // test 1
    await AccountService.createAccount("test1");
    const account1 = await AccountService.getAccount(1);
    expect(account1.id).toBe(1);
    expect(account1.name).toBe("test1");

    // test 2
    await AccountService.createAccount("test2");
    const account2 = await AccountService.getAccount(2);
    expect(account2.id).toBe(2);
    expect(account2.name).toBe("test2");

    // test 3
    const account3 = await AccountService.getAccount(3);
    expect(account3).toBeNull();
  });
});
