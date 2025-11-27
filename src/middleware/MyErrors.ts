import { HttpException, Injectable } from "@nestjs/common";

@Injectable()

export class MyErrorExeption extends HttpException{
    constructor(message: string, status: number) {
        super(
      {
        success: false,
        message: message,
      },
      status,
    );

    }
}