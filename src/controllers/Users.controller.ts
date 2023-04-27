import { NextFunction, Request, Response } from 'express';
import { UserService } from "../services/index.service";
import { StatusCodes } from 'http-status-codes';
import { IRequest, Iusers } from '../interfaces';

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

  public async getUsers(req: IRequest, res: Response) {
    const role = req.user as unknown as string;
    const users = await this.UserService.getUsers(role);
    res.status(StatusCodes.OK).json(users)
  }

  public async getUser(req: IRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const role = req.user as unknown as string;

    try {
      const user = await this.UserService.getUser(Number(id), role);
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error);
    }
  }

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const dataUser = req.body;
      const user = await this.UserService.createUser(dataUser);
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error);
    }
  }

  public async editUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const dataUser = req.body;
      const user = await this.UserService.editUser(Number(id), dataUser);
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error);
    }
  }

  public async excludeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await this.UserService.excludeUser(Number(id));
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error);
    }
  }
}

export { UsersController };
