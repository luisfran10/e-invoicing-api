import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  /**
    getRoot<T = any>(): T; //parent
    getArgs<T = any>(): T;
    getContext<T = any>(): T;
    getInfo<T = any>(): T;
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);

    Logger.error(gqlHost.getInfo, 'ExceptionFilter');

    return exception;
    /** 
    const request = gqlHost.getRequest();
    const response = context.getResponse();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );
      timeStamp: ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}, //it use back ticks
      path: request.url,
      method: request.method,
      message:
        status !== HttpStatus.INTERNAL_SERVER_ERROR
          ? exception.message || null
          : 'Internal server error',
    };

    if (status === HttpStatus.INTERNAL_SERVER_ERROR) Logger.error(exception);

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );

    response.status(status).json(errorResponse);
    */
  }
}
