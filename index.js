import express from "express";
import cors from "cors";
import sequelize from "./src/database/db-connect.js";
import createUserController from "./src/controllers/user/create-user-controller.js";
import listUsersController from "./src/controllers/user/list-users-controller.js";
import updateUserController from "./src/controllers/user/update-user-controller.js";
import deleteUserController from "./src/controllers/user/delete-user-controller.js";
import createProductsController from "./src/controllers/products/create-products-controller.js";
import listProductsController from "./src/controllers/products/list-products-controller.js";
import updateProductsController from "./src/controllers/products/update-products-controller.js";
import deleteProductsController from "./src/controllers/products/delete-products-controller.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", listUsersController);
app.post("/user", createUserController);
app.put("/user/:id", updateUserController);
app.delete("/user/:id", deleteUserController);

app.post("/products", createProductsController);
app.get("/products", listProductsController);
app.put("/products/:id", updateProductsController);
app.delete("/products/:id", deleteProductsController);

app.listen(3000, () => {
  console.log(`App is running`);
});
