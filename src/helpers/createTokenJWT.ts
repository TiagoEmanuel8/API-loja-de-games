import * as jwt from 'jsonwebtoken';
import jwtConfig from './jwt';
import { IPayload } from '../interfaces'

class Token {
  static createToken(payload: IPayload) {
    const { secret } = jwtConfig.jwt;

    const token = jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '30d' });

    return token;
  }
}

export { Token }
