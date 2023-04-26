import Users from '../database/models/users'
import { Iusers } from '../interfaces'

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
}

export { UserService }