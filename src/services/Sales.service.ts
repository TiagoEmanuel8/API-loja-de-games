import Sales from '../database/models/sales.model';
import Users from '../database/models/users.model';
import Products from '../database/models/products.model';
import { NotFound } from '../errors/index.error';
// import SalesProducts from '../database/models/salesproducts.model';


class SaleService {
  private Sales = Sales;
  private Users = Users;
  private Products = Products;
  // private SalesProducts = SalesProducts;

  public async getSales() {
    const sales =  await this.Sales.findAll(
      {
        include: [
          { model: this.Users, as: 'user_id', attributes: { exclude: ['password'] } },
          // { model: this.Products, as: 'product', through: { attributes: [] } },
        ]
      }
    );
    return sales;
  }

  public async getSale(id: number) {
    const sale =  await this.Sales.findByPk(id,
      {
        include: [
          { model: this.Users, as: 'user_id', attributes: { exclude: ['password'] } }
        ]
      }
    );

    if (!sale) {
      throw new NotFound('Sale not found');
    }
  
    return sale;
  }

  public async createSale(dataSales: any) {
    const { userId, sellerId, totalPrice, statusSale  } = dataSales;

    const addSale = await this.Sales.create({ userId, sellerId, totalPrice, statusSale });

    return addSale;
  }
}

export { SaleService }