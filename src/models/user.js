import { DataTypes } from "sequelize";
import sequelize from "../database/db-connect.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "ACTIVE",
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;
