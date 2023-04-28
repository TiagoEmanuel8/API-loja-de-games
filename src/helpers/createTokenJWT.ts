import * as jwt from 'jsonwebtoken';
import jwtConfig from './jwt';
import { IPayload } from '../interfaces'

class Token {
  static createToken(payload: IPayload) {
    const { secret } = jwtConfig.jwt;
    const configs:object = {
      algorithm: 'HS256', expiresIn: '1y'
    };

    const token = jwt.sign({ data: payload }, secret, configs);

    return token;
  }
}

export { Token }
