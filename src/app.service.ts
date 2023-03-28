import { Inject, Injectable } from '@nestjs/common';
import { ClickHouseClient } from '@depyronick/nestjs-clickhouse';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS_SERVER')
    private readonly analyticsServer: ClickHouseClient,
  ) {}

  async addMessage(message) {
    console.log(message)
    try {
      const result = await this.analyticsServer.insertPromise('messages1', [message])
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  async getMessages() {
    const result = await this.analyticsServer.queryPromise('SELECT * FROM messages1 LIMIT 10')

    console.log(result)
    return result
  }
}
