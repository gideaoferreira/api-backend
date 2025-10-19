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
import listOrdersController from "./src/controllers/orders/list-orders-controller.js";
import createOrdersController from "./src/controllers/orders/create-orders-controller.js";
import updateOrdersController from "./src/controllers/orders/update-orders-controller.js";
import deleteOdersController from "./src/controllers/orders/delete-orders-controler.js";
import getUserByIdController from "./src/controllers/user/get- user-by-id-controller.js";
import getByIdProductsController from "./src/controllers/products/get-by-id-products-controller.js";
import createStoreController from "./src/controllers/store/create-store-controller.js";
import listStoreController from "./src/controllers/store/list-store-controller.js";
import updateStoreController from "./src/controllers/store/update-store-controller.js";
import deleteStoreController from "./src/controllers/store/delete-store-controller.js";
import { setupAssociations } from "./src/models/associations.js";
import getByIdOrdersController from "./src/controllers/orders/get-by-id-orders.js";

const app = express();

app.use(express.json());
app.use(cors());

setupAssociations();

app.get("/users", listUsersController);
app.get("/user/:id", getUserByIdController);
app.post("/user", createUserController);
app.put("/user/:id", updateUserController);
app.delete("/user/:id", deleteUserController);

app.post("/products", createProductsController);
app.get("/products", listProductsController);
app.get("/product/:id", getByIdProductsController);
app.put("/products/:id", updateProductsController);
app.delete("/products/:id", deleteProductsController);

app.get("/orders", listOrdersController);
app.get("order/:id", getByIdOrdersController);
app.post("/orders", createOrdersController);
app.put("/orders/:id", updateOrdersController);
app.delete("/orders/:id", deleteOdersController);

app.post("/store", createStoreController);
app.get("/store", listStoreController);
app.put("/store/:id", updateStoreController);
app.delete("/store/:id", deleteStoreController);

app.listen(3000, () => {
  console.log(`App is running`);
});
