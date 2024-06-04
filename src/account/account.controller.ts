import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, UpdateAccountDto } from './dto';

@Controller('account')
export class AccountController {
  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  getAccount() {}

  @Patch()
  @ApiOkResponse({
    type: AccountDto,
  })
  updateAccount(@Body() body: UpdateAccountDto) {}
}
