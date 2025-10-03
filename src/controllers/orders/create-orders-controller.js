import Orders from "../../models/orders.js";

async function createOrdersController(request, response) {
  try {
    const orderData = {
    customer_id: request.body.customer_id,
    store_id: request.body.store_id,
  };
  const order = await Orders.create(orderData);

  return response.status(201).json(order);
  }catch(error){
    return response.status(500).json(error)
  }
}

export default createOrdersController;
