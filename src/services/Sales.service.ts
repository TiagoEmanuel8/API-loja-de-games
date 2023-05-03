import Sales from '../database/models/sales.model';
import Users from '../database/models/users.model';
import Products from '../database/models/products.model';

class SaleService {
  private Sales = Sales;
  private Users = Users;
  private Products = Products;

  public async getSales() {
    const sales =  await this.Sales.findAll(
      {
        include: [
          { model: this.Users, as: 'user_id', attributes: { exclude: ['password'] } },
          { model: this.Products, as: 'product', through: { attributes: [] } }
        ]
    }
    );
    return sales;
  }
}

export { SaleService }