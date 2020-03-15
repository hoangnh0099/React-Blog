import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHelloTwo(): string {
    return 'Hello World 2';
  }
}
