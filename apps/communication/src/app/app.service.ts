import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleUserCreated = (user) => {
    console.log('handleUserCreated - COMMUNICATIONS', user);
  };

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
