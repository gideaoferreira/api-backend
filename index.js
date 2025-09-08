import express from "express";
import cors from "cors";
import sequelize from "./src/database/db-connect.js";
import createUserController from "./src/controllers/user/create-user-controller.js";
import listUsersController from "./src/controllers/user/list-users-controller.js";
import updateUserController from "./src/controllers/user/update-user-controller.js";
import deleteUserController from "./src/controllers/user/delete-user-controller.js";
import createProducts from "./src/controllers/products/create-products-controller.js";
import listProducts from "./src/controllers/products/list-products-controller.js";
import updateProducts from "./src/controllers/products/update-products-controller.js";
import deleteProducts from "./src/controllers/products/delete-products-controller.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", listUsersController);
app.post("/user", createUserController);
app.put("/user/:id", updateUserController);
app.delete("/user/:id", deleteUserController);

app.post("/products", createProducts);
app.get("/products", listProducts);
app.put("/products/:id", updateProducts);
app.delete("/products/:id", deleteProducts);

app.listen(3000, () => {
  console.log(`App is running`);
});
