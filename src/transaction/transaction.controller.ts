import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/user.entity';
import { TransactionDTO } from './transaction.dto';

@Controller('')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('transaction')
  async create(@Body() transactionDTO: TransactionDTO,
  ): Promise<any> {
    return this.transactionService.create(transactionDTO);
  }
}
