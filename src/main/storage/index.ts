import { AccountController } from "./account/account.controller";
import { AccountService } from "./account/account.service";

// test for the storage methods
export const test = async () => {
  // test 1
  await AccountService.createAccount("test1");
  // test 2
  const account1 = await AccountService.getAccount(1);
  console.log(account1);
  // test 3
  await AccountService.createAccount("test2");
  // test 2
  const account2 = await AccountService.getAccount(2);
  console.log(account2);

}

export const registerStorage = () => {
  const accountController = new AccountController();

  accountController.register();
};
