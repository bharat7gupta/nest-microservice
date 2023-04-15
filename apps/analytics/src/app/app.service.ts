import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  handleUserCreated(user: any) {
    console.log('handleUserCreated - ANALYTICS', user);
    this.analytics.push({
      ...user,
      timestamp: new Date()
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
