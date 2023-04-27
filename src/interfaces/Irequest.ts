import { Request } from 'express';

interface IReqUsers {
  id: number,
  role: string
}

interface IRequest extends Request{
  user?: IReqUsers
}

export { IRequest, IReqUsers }
