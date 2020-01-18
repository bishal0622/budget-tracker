import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, Min } from 'class-validator';

@Entity()
export class Transaction {

  @PrimaryGeneratedColumn('uuid', {name: 'id'}) private _id: number;

  @IsNotEmpty()
  @Min(0)
  @Column({unique: true, name: 'amount'}) private _amount: number;

  @Column('enum', { nullable: false, name: 'type' }) private _type: string;

  @Column({default: Date.now(), name: 'created_at'}) private _createdAt: string;

  @Column({name: 'user_id'}) private _userId: number;

  @Column({name: 'category'}) private _category: string;

  @Column({name: 'notes'}) private _notes: string;

  constructor(id?: number, amount?: number, type?: string, createdAt?: string, userId?: number, category?: string, notes?: string) {
    this._id = id ? id : null;
    this._amount = amount ? id : null;
    this._type = type ? type : null;
    this._createdAt = createdAt ? createdAt : Date.now().toString();
    this._userId = userId ? userId : null;
    this._category = category ? category : null;
    this._notes = notes ? notes : null;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }
}
