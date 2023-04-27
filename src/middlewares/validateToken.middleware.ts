import { Response, NextFunction, Request } from 'express';
import { NotFound, Unauthorized } from '../errors/index.error';
import * as jwt from 'jsonwebtoken';
import jwtConfig from '../helpers/jwt';
import { IRequest } from '../interfaces/Irequest';

const valitadeToken = async (req: IRequest, _res: Response, next: NextFunction) => {
  const secret = jwtConfig.jwt.secret as unknown as string;  
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new NotFound('Token not found');
    }

    const validToken = jwt.verify(token, secret) as jwt.JwtPayload;
    const { role } = validToken;
  
    req.user = role;

    next();
  } catch (err) {
    console.error(err);
    throw new Unauthorized('Invalid token');
  }
};

export { valitadeToken }
