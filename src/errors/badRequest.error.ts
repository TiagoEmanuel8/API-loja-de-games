import { StatusCodes } from 'http-status-codes';


class BadRequest extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export { BadRequest }
