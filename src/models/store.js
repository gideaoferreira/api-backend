import { DataTypes } from "sequelize";
import sequelize from "../database/db-connect.js";

const Store = sequelize.define(
  "store",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "store",
    timestamps: true,
  }
);

export default Store;
