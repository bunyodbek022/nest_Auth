import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class MyHttpFilterExeption implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const req = ctx.getRequest();
    const res = ctx.getResponse();

    const status = exception.status;
    const message = exception.getResponse();

    return res.status(status).json({
      success: false,
      status: status,
      message,
      path: req.path,
      timestamp: new Date().toISOString(),
    });
  }
}
