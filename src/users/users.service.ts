import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private bdService: DbService) {}

  async findByEmail(email: string) {
    return this.bdService.user.findFirst({ where: { email } });
  }

  async create(email: string, hash: string, salt: string) {
    return this.bdService.user.create({ data: { email, hash, salt } });
  }
}
