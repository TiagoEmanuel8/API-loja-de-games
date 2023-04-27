import Users from '../database/models/users.model';
import { ILoginDTO } from '../interfaces';
import { Unauthorized } from '../errors/index.error';
import { isPasswordEqual } from '../helpers/bcrypt';
import { Token } from '../helpers/createTokenJWT';


class LoginService {
  private Users = Users;
  private isPasswordEqual = isPasswordEqual;
  private Token = Token.createToken;

  public async login(loginData: ILoginDTO) {
    const { email, password } = loginData;

    const searchUser = await this.Users.findOne({ where: { email } });
    if (!searchUser) {
      throw new Unauthorized('Incorrect email or password');
    }

    const comparePassword = await this.isPasswordEqual(password, searchUser.password);
    if (!comparePassword) {
      throw new Unauthorized('Incorrect email or password');
    }

    // const payload = { id: searchUser.id, role: searchUser.role };
    const token = this.Token({ id: searchUser.id, role: searchUser.role });

    const { id, name, role } = searchUser;
    return { id, name, email, role, token };
  }
}

export { LoginService }