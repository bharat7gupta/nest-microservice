import { Body, Controller, Get, Post } from "@nestjs/common";

import { AppService } from "./app.service";
import { CreateUserRequest } from "./create-user-request.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createUser(@Body() user: CreateUserRequest) {
    console.log('creating user', user);
    return this.appService.createUser(user);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalyticsData();
  }
}
