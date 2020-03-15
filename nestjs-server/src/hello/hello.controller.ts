import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { Hello } from './hello.entity';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  findAll(): Promise<Hello[]> {
    return this.helloService.findAll();
  }

  @Get()
  getHelloTwo() {
    return this.helloService.getHelloTwo();
  }
}
