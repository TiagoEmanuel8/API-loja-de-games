import Sales from '../database/models/sales.model';
import Users from '../database/models/users.model';
import Products from '../database/models/products.model';

class SaleService {
  private Sales = Sales;
  private Users = Users;

  public async getSales() {
    const sales =  await this.Sales.findAll(
      {
        include: [
          { model: this.Users, as: 'user_id', attributes: { exclude: ['password'] } }
        ]
      }
    );
    return sales;
  }

  public async getSale(id: number) {
    const sales =  await this.Sales.findByPk(id,
      {
        include: [
          { model: this.Users, as: 'user_id', attributes: { exclude: ['password'] } }
        ]
      }
    );
    return sales;
  }
}

export { SaleService }