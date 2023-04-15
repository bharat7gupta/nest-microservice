import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAnalytics() {
    return this.appService.getAnalytics();
  }

  @EventPattern('USER_CREATED')
  handleUserCreated(user) {
    console.log('ANALYTICS event received');
    this.appService.handleUserCreated(user);
  }

  @MessagePattern({ cmd: 'GET_ANALYTICS' })
  getAnalyticsData() {
    return this.appService.getAnalytics();
  }
}
