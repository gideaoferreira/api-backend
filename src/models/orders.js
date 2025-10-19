import { DataTypes } from "sequelize";
import sequelize from "../database/db-connect.js";
import User from "./user.js";
import Products from "./products.js";

const Orders = sequelize.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    timestamps: true,
  }
);

// Orders.belongsTo(User, { as: "user", foreignKey: "customer_id" });
// User.hasMany(Orders, { as: "product", foreignKey: "customer_id" });

// Orders.belongsTo(Products, { as: "product", foreignKey: "product_id" });
// Products.hasMany(Orders, { as: "orders", foreignKey: "product_id" });

export default Orders;
