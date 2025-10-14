import User from "../models/user.js";
import Orders from "../models/orders.js";
import Products from "../models/products.js";

export function setupAssociations() {
  User.hasMany(Orders, { foreignKey: "customer_id", as: "orders" });
  Orders.belongsTo(User, { foreignKey: "customer_id", as: "user" });

  Products.hasMany(Orders, { foreignKey: "product_id", as: "orders" });
  Orders.belongsTo(Products, { foreignKey: "product_id", as: "product" });
}
