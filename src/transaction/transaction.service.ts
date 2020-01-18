import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { TransactionDTO } from './transaction.dto';
import { CreditCategoryEnum } from './creditCategory.enum';
import { DebitCategoryEnum } from './debitCategory.enum';
import { TransactionTypeEnum } from './transactionType.enum';

@Injectable()
export class TransactionService {
  creditCategory: CreditCategoryEnum;
  debitCategory: DebitCategoryEnum;

  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {
  }

  async create(transactionDTO: TransactionDTO): Promise<Transaction> {
    const transaction: Transaction = new Transaction();
    transaction.amount = transactionDTO.amount;
    transaction.type = this.findTypefromCategory(transactionDTO.category);
    transaction.userId = transactionDTO.userId;
    transaction.category = transactionDTO.category;
    transaction.notes = transactionDTO.notes;
    return await this.transactionRepository.save(transaction);
  }

  private findTypefromCategory(category: string) {
    const debit = Object.keys(this.debitCategory).find(x => x === category);
    return debit === undefined ? TransactionTypeEnum.CREDIT : TransactionTypeEnum.DEBIT;
  }

   getCreditCategory() {
    return this.creditCategory;
  }

   getDebitCategory() {
    return this.debitCategory;
  }

  async findByUser(userid: number) {
    return await this.transactionRepository.find({userId : userid});
  }

  async findByUserAndCategory(userid: number, categoryId) {
    return this.transactionRepository.find({userId : userid});
  }
}
