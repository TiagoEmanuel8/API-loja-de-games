import { StatusCodes } from 'http-status-codes';

class Forbidden extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export { Forbidden }
