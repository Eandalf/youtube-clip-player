export { initialize } from "./db";
import { AccountController } from "./account/account.controller";

export const registerStorage = () => {
  const accountController = new AccountController();

  accountController.register();
};
