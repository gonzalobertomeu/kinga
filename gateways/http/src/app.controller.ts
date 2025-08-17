import { BadRequestException, Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    try {
      const result = await firstValueFrom(
        this.authClient.send({ cmd: 'ping2' }, {}),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
