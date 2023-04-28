import { NextFunction, Request, Response } from 'express';
import { LoginService } from '../services/Login.service';
import { StatusCodes } from 'http-status-codes';

class LoginController {
  private LoginService: LoginService;

  constructor() {
    this.LoginService = new LoginService();
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response) {
    const loginData = req.body;
    const login = await this.LoginService.login(loginData);
    res.status(StatusCodes.OK).json(login);
  }
}

export { LoginController }