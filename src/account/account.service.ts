import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UpdateAccountDto } from './dto';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  async getAccount(userId: number) {
    return this.db.account.findFirstOrThrow({ where: { ownerId: userId } });
  }

  async updateAccount(userId: number, updateInfo: UpdateAccountDto) {
    return this.db.account.update({
      where: { ownerId: userId },
      data: { ...updateInfo },
    });
  }
}
