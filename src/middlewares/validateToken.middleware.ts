import { Response, NextFunction, Request } from 'express';
import { NotFound, Unauthorized } from '../errors/index.error';
import * as jwt from 'jsonwebtoken';
import jwtConfig from '../helpers/jwt';
import { IRequest } from '../interfaces';

const valitadeToken = async (req: IRequest, _res: Response, next: NextFunction) => {
  const secret = jwtConfig.jwt.secret as unknown as string;  
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new NotFound('Token not found');
    }

    const validToken = jwt.verify(authorization, secret) as jwt.JwtPayload;
    const { data } = validToken;

    req.user = data;

    next();
  } catch (err) {
    console.error(err);
    throw new Unauthorized('Invalid token');
  }
};

export { valitadeToken }
