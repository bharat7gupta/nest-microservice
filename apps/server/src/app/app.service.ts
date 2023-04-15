import { Inject, Injectable } from "@nestjs/common";
import { CreateUserRequest } from "./create-user-request.dto";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  private readonly users: CreateUserRequest[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  createUser(user: CreateUserRequest) {
    this.users.push(user);

    this.communicationClient.emit('USER_CREATED', { email: user.email });
    this.analyticsClient.emit('USER_CREATED', { email: user.email });
  }

  getData(): { message: string } {
    return { message: "Hello API" };
  }

  getAnalyticsData() {
    return this.analyticsClient.send({ cmd: 'GET_ANALYTICS' }, {});
  }
}
