import { DataTypes } from "sequelize";
import sequelize from "../database/db-connect.js";

const Orders = sequelize.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    tableName: "orders",
    timestamps: true,
  }
);

export default Orders;
