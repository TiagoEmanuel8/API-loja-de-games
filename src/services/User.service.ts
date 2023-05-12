import Users from '../database/models/users.model';
import { Iusers, IusersDTO, IReqUsers } from '../interfaces';
import { NotFound, BadRequest, Forbidden, Unauthorized } from '../errors/index.error';
import { createHashPassword } from '../helpers/bcrypt';

class UserService {
  private Users = Users;
  private createHashPassword = createHashPassword;

  public async getUsers(dataUserReq: IReqUsers): Promise<Iusers[]> {
    if (dataUserReq.role === 'client') {
      throw new Forbidden('Only admins or sellers can listen users');
    };
    const users = await this.Users.findAll({ attributes: { exclude: ['password'] } });
    return users
  }

  public async getUser(id: number, dataUserReq: IReqUsers): Promise<Iusers | null> {
    if (dataUserReq.role === 'client') {
      throw new Forbidden('Only admins or sellers can listen users');
    };

    const user = await this.Users.findOne({
      where: { id },
      attributes: { exclude: ['password'] }
    });
  
    if (!user) {
      throw new NotFound('User not found');
    }
    return user
  }

  public async createUser(dataUser: IusersDTO): Promise<Iusers | null> {
    const { name, email, password, cpf, mobileNumber, address,
      addressNumber, district, city, state, country, cep, role } = dataUser;
    
    const findUser = await this.Users.findOne({ where: { email }});
    if (findUser) {
      throw new BadRequest('User already registered');
    }

    const verifyLengthPassword = password.length >= 6 && password.length <= 10;
    if(!verifyLengthPassword) {
      throw new BadRequest('password must contain between 6 and 10 characters');
    }
    
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    if (!emailRegex) {
      throw new BadRequest('"email" must be a valid email');
    }

    const encryptPassword = await this.createHashPassword(password)

    const newUser = await this.Users.create({ name, email, password: encryptPassword, cpf, mobileNumber, address, addressNumber, district, city, state, country, cep, role });
    return newUser;
  }

  public async editUser(id: number, dataUser: IusersDTO, dataUserReq: IReqUsers): Promise<Iusers | null> {
    const { name, email, password, cpf, mobileNumber, address,
      addressNumber, district, city, state, country, cep, role } = dataUser;
    
    const userById = await this.Users.findByPk(id);
    if(!userById) {
      throw new NotFound('User not found');
    }

    if (role) {
      throw new Forbidden('Role cannot be edited');
    }

    if(Number(userById.id) !== Number(dataUserReq.id)) {
      throw new Unauthorized('Unauthorized user');
    };
  
    await this.Users.update({ name, email, password, cpf, mobileNumber, address,
    addressNumber, district, city, state, country, cep }, { where: { id } });

    const edited = await this.Users.findOne({ where: { id }});
    return edited;
  }

  public async excludeUser(id: number, dataUserReq: IReqUsers): Promise<boolean> {
    const userById = await this.Users.findByPk(id);
    if(!userById) {
      throw new NotFound('User not found');
    }

    if(Number(userById.id) !== Number(dataUserReq.id)) {
      throw new Unauthorized('Unauthorized user');
    };

    await this.Users.destroy({ where: { id } });
    return true;
  }
}

export { UserService }