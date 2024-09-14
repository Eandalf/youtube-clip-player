import { ipcMain } from "electron";
import { AccountService } from "./account.service";

export class AccountController {
  register() {
    ipcMain.handle("GET/users", async (_event, id: number) => AccountService.getAccount(id));
    ipcMain.handle("POST/users", async (_event, name: string) => AccountService.createAccount(name));
  }

  deregister() {
    ipcMain.removeHandler("GET/users");
    ipcMain.removeHandler("POST/users");
  }
}
