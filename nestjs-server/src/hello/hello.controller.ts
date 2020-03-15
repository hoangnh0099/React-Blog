import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHelloTwo() {
    this.getHelloTwo();
  }
}
