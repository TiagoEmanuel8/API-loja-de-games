import Sales from '../database/models/sales.model';
import Users from '../database/models/users.model';
import SalesProducts from '../database/models/sales.model';


class SaleService {
  private Sales = Sales;
  private Users = Users;
  private SalesProducts = SalesProducts;

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

    public async createSale(dataSales: any) {
      const { userId, sellerId, totalPrice, statusSale  } = dataSales;

      const addSale = await this.Sales.create({ userId, sellerId, totalPrice, statusSale });

      return addSale;
    }
}

export { SaleService }