import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getMessages() {
    return this.appService.getMessages()
  }

  @Post()
  async addMessage(@Body() message) {
    return this.appService.addMessage(message)
  }
}
