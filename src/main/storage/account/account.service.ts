import { Table } from '@main/storage/db/table.enum';
import { readData, writeData } from '@main/storage/db';
import { Account } from './account.entity';

export class AccountService {
  static async getAccount(id: number): Promise<Account> {
    // Lack of data validation and sanitization.
    const accounts = await readData(Table.ACCOUNT) as Account[];
    const account = accounts.find((account) => account.id === id);
    return account ? account : null;
  }

  static async createAccount(name: string): Promise<void> {
    const accounts = await readData(Table.ACCOUNT) as Account[];
    const maxId = accounts.length > 0 ? Math.max(
      ...(accounts.map((account) => account.id))
    ) : 0;
    const newAccount = new Account(maxId + 1, name);
    await writeData(Table.ACCOUNT, [...accounts, newAccount]);
  }
}
