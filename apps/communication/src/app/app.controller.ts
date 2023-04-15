import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('USER_CREATED')
  handleUserCreated(user) {
    console.log('COMM event received');
    this.appService.handleUserCreated(user);
  }
}
