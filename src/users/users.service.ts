import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ username });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
