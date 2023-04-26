import { Request, Response } from 'express';
import { UserService } from "../services";
import { StatusCodes } from 'http-status-codes';

class UsersController {
  private UserService: UserService;

  constructor() {
    this.UserService = new UserService();
    this.getUsers = this.getUsers.bind(this);
  }

  public async getUsers(_req: Request, res: Response) {
    const users = await this.UserService.getUsers();
    res.status(StatusCodes.OK).json(users)
  }
}

export { UsersController };
