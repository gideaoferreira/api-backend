import Orders from "../../models/orders.js";

async function createOrdersController(request, response) {
  const orderData = {
    client_id: request.body.custome_id,
    store_id: request.body.store_id,
  };
  const order = await Orders.create(orderData);

  return response.status(201).json(order);
}

export default createOrdersController;
