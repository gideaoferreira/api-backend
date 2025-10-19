import User from "../models/user.js";
import Orders from "../models/orders.js";
import Products from "../models/products.js";

export function setupAssociations() {
  Orders.belongsTo(User, { as: "user", foreignKey: "customer_id" });
  User.hasMany(Orders, { as: "orders", foreignKey: "customer_id" });

  // Relação Orders ↔ Products
  Orders.belongsTo(Products, { as: "product", foreignKey: "product_id" });
  Products.hasMany(Orders, { as: "orders", foreignKey: "product_id" });
}
