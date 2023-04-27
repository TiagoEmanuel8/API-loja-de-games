import { Request } from 'express';
import { Iusers } from '.';
import Users from '../database/models/users.model';


interface IRequest extends Request{
  user?: Users
}

export { IRequest }
