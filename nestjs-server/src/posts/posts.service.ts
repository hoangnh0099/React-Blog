import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postsRepo: Repository<Posts>,
  ) {}

  async findAll(): Promise<Posts[]> {
    return await this.postsRepo.find();
  }

  async findOne(id: number): Promise<Posts> {
    return await this.postsRepo.findOne(id);
  }

  async create(posts: Posts): Promise<Posts> {
    return await this.postsRepo.save(posts);
  }

  async update(posts: Posts): Promise<UpdateResult> {
    return await this.postsRepo.update(posts.id, posts);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.postsRepo.delete(id);
  }
}
