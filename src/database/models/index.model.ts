import { Sequelize } from 'sequelize';
import * as config from '../config/database';

export default new Sequelize(config);

// import { Sequelize } from 'sequelize';
// import * as config from '../config/database';

// const db = new Sequelize(config);

// import Products from './products.model';
// import Sales from './sales.model';
// import SalesProducts from './salesproducts.model';
// import Users from './users.model'

// const models = {
//   Products,
//   Sales,
//   SalesProducts,
// };

// const associate = () => {
//   Products.belongsToMany(Sales, {
//     as: 'sales',
//     through: SalesProducts,
//     foreignKey: 'productId',
//     otherKey: 'saleId',
//   });

//   Sales.belongsToMany(Products, {
//     as: 'products',
//     through: SalesProducts,
//     foreignKey: 'saleId',
//     otherKey: 'productId',
//   });


//   Users.hasMany(Products, {
//     foreignKey: 'id',
//     as: 'saleId'
//   });

//   Sales.belongsTo(Users, {
//     foreignKey: 'userId',
//     as: 'user_id'
//   });
// }

// associate();

// export { db };

// export default models;
