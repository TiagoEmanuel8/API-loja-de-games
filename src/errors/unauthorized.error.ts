import { StatusCodes } from 'http-status-codes';

class Unauthorized extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export { Unauthorized }
