import Orders from "../../models/orders.js";

async function listOrdersController(request, response) {
  const orders = await Orders.findAll();
  return response.status(200).json(orders);
}

export default listOrdersController;
