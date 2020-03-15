import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hello } from './hello.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HelloService {
  constructor(
    @InjectRepository(Hello) private readonly helloRepo: Repository<Hello>,
  ) {}

  async findAll(): Promise<Hello[]> {
    return await this.helloRepo.find();
  }

  getHelloTwo(): string {
    return 'Hello World 2';
  }
}
