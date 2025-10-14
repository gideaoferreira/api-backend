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

// Orders.belongsTo(User, { foreignKey: "customer_id" });
// User.hasMany(Orders, { foreignKey: "customer_id" });

// Orders.belongsTo(Products, { foreignKey: "product_id" });
// Products.hasMany(Orders, { foreignKey: "product_id" });

export default Orders;
