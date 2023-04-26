import { NextFunction, Request, Response } from 'express';
import { UserService } from "../services";
import { StatusCodes } from 'http-status-codes';

class UsersController {
  private UserService: UserService;

  constructor() {
    this.UserService = new UserService();
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.excludeUser = this.excludeUser.bind(this);
  }

  public async getUsers(_req: Request, res: Response) {
    const users = await this.UserService.getUsers();
    res.status(StatusCodes.OK).json(users)
  }

  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await this.UserService.getUser(Number(id));
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error);
    }
  }

  public async createUser(req: Request, res: Response) {
    const dataUser = req.body;
    const user = await this.UserService.createUser(dataUser);
    res.status(StatusCodes.OK).json(user)
  }

  public async editUser(req: Request, res: Response) {
    const { id } = req.params;
    const dataUser = req.body;
    const user = await this.UserService.editUser(Number(id), dataUser);
    res.status(StatusCodes.OK).json(user)
  }

  public async excludeUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.UserService.excludeUser(Number(id));
    res.status(StatusCodes.OK).json(user)
  }
}

export { UsersController };
