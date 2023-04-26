import Users from '../database/models/users'

class UserService {
  private Users = Users;

  public async getUsers() {
    const getUsers = await this.Users.findAll();
    return getUsers
  }
}

export { UserService }