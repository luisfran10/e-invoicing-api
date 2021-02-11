import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpRegisterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const dateNow = Date.now();

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.warn(
            `${method} ${url} ${Date.now() - dateNow}ms`,
            context.getClass().name,
          ),
        ),
      );
  }
}
