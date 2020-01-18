import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({unique: true})
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @Column()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Column({name: 'first_name'})
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Column({name: 'last_name'})
  lastName: string;

  @Column({default: Date.now()})
  createdAt: string;
}
