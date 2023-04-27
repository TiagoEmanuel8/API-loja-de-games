import { StatusCodes } from 'http-status-codes';
class NotFound extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export { NotFound }
