import { Controller, Get } from '@nestjs/common';
import { Top75 } from './top75.service';

@Controller()
export class Top75Controller {
  constructor(private readonly top75: Top75) {}

  @Get()
  getHello(): string {
    return this.top75.getHello();
  }
}
