import { NextFunction, Request, Response } from 'express';
import { UserService } from "../services/index.service";
import { StatusCodes } from 'http-status-codes';
import { IRequest, IReqUsers } from '../interfaces';

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
    const dataUserReq = req.user as unknown as IReqUsers;
    const users = await this.UserService.getUsers(dataUserReq);
    res.status(StatusCodes.OK).json(users)
  }

  public async getUser(req: IRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const dataUserReq = req.user as unknown as IReqUsers;

    try {
      const user = await this.UserService.getUser(Number(id), dataUserReq);
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error);
    }
  }

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const dataUser = req.body;
      const user = await this.UserService.createUser(dataUser);
      res.status(StatusCodes.CREATED).json(user)
    } catch (error) {
      next(console.log(error));
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }

  public async editUser(req: IRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const dataUser = req.body;
    const dataUserReq = req.user as unknown as IReqUsers;

    try {
      const user = await this.UserService.editUser(Number(id), dataUser, dataUserReq);
      res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(console.log(error));
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }

  public async excludeUser(req: IRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const dataUserReq = req.user as unknown as IReqUsers;

    try {
      const user = await this.UserService.excludeUser(Number(id), dataUserReq);
      res.status(StatusCodes.NO_CONTENT).json(user)
    } catch (error) {
      next(console.log(error));
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }
}

export { UsersController };
