import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cart from "./cart.js";
import _category from "./category.js";
import _itemproduct from "./itemproduct.js";
import _orderlineitem from "./orderlineitem.js";
import _orders from "./orders.js";
import _product from "./product.js";
import _users from "./users.js";
import Sequelize from "sequelize";
import config from "../../config/config.js";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const initModels = (sequelize) => {
  const cart = _cart.init(sequelize, DataTypes);
  const category = _category.init(sequelize, DataTypes);
  const itemproduct = _itemproduct.init(sequelize, DataTypes);
  const orderlineitem = _orderlineitem.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  product.belongsTo(category, {
    as: "category_category",
    foreignKey: "category",
  });
  category.hasMany(product, { as: "products", foreignKey: "category" });
  orderlineitem.belongsTo(orders, { as: "order_order", foreignKey: "order" });
  orders.hasMany(orderlineitem, { as: "orderlineitems", foreignKey: "order" });
  itemproduct.belongsTo(product, {
    as: "product_product",
    foreignKey: "product",
  });
  product.hasMany(itemproduct, { as: "itemproducts", foreignKey: "product" });
  orderlineitem.belongsTo(product, {
    as: "product_product",
    foreignKey: "product",
  });
  product.hasMany(orderlineitem, {
    as: "orderlineitems",
    foreignKey: "product",
  });
  itemproduct.belongsTo(users, { as: "users_user", foreignKey: "users" });
  users.hasMany(itemproduct, { as: "itemproducts", foreignKey: "users" });
  orders.belongsTo(users, { as: "users_user", foreignKey: "users" });
  users.hasMany(orders, { as: "orders", foreignKey: "users" });

  return {
    cart,
    category,
    itemproduct,
    orderlineitem,
    orders,
    product,
    users,
  };
};
const models = initModels(sequelize);
export default models;
export { sequelize };
