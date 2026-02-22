import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkHealth(): string {
    return 'Application health check and running...';
  }
}
