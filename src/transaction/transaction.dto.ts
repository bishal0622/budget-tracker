export interface TransactionDTO {
  readonly id: number;
  readonly amount: number;
  readonly category: string;
  readonly userId: number;
  readonly notes: string;
}
