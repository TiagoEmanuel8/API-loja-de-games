import Users from '../database/models/users'
import { Iusers, IusersDTO } from '../interfaces'

class UserService {
  private Users = Users;

  public async getUsers(): Promise<Iusers[]> {
    const getUsers = await this.Users.findAll();
    return getUsers
  }

  public async getUser(id: number): Promise<Iusers | null> {
    const getUser = await this.Users.findOne({ where: { id }});
    return getUser
  }

  public async createUser(dataUser: IusersDTO): Promise<Iusers | null> {
    // desestruturação para futuras validações
    const { name, email, password, cpf, mobileNumber, address,
      addressNumber, district, city, state, country, cep, role } = dataUser;
    
    const newUser = await this.Users.create({ name, email, password, cpf, mobileNumber, address, addressNumber, district, city, state, country, cep, role });
    return newUser;
  }
}

export { UserService }