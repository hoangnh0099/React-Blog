import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Posts> {
    const id: number = params.id;
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() post: Posts) {
    return this.postsService.create(post);
  }

  @Put()
  update(@Body() post: Posts) {
    return this.postsService.update(post);
  }

  @Delete(':id')
  deletePost(@Param() params) {
    const id: number = params.id;
    return this.postsService.delete(id);
  }
}
