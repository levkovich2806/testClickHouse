import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClickHouseModule } from '@depyronick/nestjs-clickhouse';

@Module({
  imports: [
    ClickHouseModule.register([
      {
        name: 'ANALYTICS_SERVER',
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
