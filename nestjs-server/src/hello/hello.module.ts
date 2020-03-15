import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hello } from './hello.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hello])],
  providers: [HelloService],
  controllers: [HelloController],
})
export class HelloModule {}
