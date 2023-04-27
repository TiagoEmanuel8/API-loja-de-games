import Users from '../database/models/users.model';
import { Iusers, IusersDTO } from '../interfaces';
import { NotFound, BadRequest } from '../errors';
import { createHashPassword } from '../helpers';

class UserService {
  private Users = Users;
  private createHashPassword = createHashPassword;

  public async getUsers(): Promise<Iusers[]> {
    const getUsers = await this.Users.findAll();
    return getUsers
  }

  public async getUser(id: number): Promise<Iusers | null> {
    const getUser = await this.Users.findOne({ where: { id }});
    if (!getUser) {
      throw new NotFound('User not found');
    }
    return getUser
  }

  public async createUser(dataUser: IusersDTO): Promise<Iusers | null> {
    // desestruturação para futuras validações
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

  public async editUser(id: number, dataUser: IusersDTO): Promise<Iusers | null> {
    const { name, email, password, cpf, mobileNumber, address,
      addressNumber, district, city, state, country, cep, role } = dataUser;
    
    const data = await this.Users.findByPk(id);
    if(!data) {
      throw new NotFound('User not found');
    }
  
    await this.Users.update({ name, email, password, cpf, mobileNumber, address,
    addressNumber, district, city, state, country, cep, role }, { where: { id } });

    const edited = await this.Users.findOne({ where: { id }});
    return edited;
  }

  public async excludeUser(id: number): Promise<boolean> {
    const data = await this.Users.findByPk(id);
    if(!data) {
      throw new NotFound('User not found');
    }

    await this.Users.destroy({ where: { id } });
    return true;
  }
}

export { UserService }