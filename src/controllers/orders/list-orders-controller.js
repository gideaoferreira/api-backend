import Orders from "../../models/orders.js";
import User from "../../models/user.js";
import Products from "../../models/products.js";

async function listOrdersController(request, response) {
  try {
    const orders = await Orders.findAll();
    return response.status(200).json(orders);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export default listOrdersController;
