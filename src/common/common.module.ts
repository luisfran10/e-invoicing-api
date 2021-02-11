import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { HttpExceptionFilter } from './http-exception.filter';
import { HttpRegisterInterceptor } from './http-register.interceptor';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpRegisterInterceptor,
    },
  ],
})
export class CommonModule {}
