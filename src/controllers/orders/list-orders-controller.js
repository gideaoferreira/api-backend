import Orders from "../../models/orders.js";

async function listOrdersController(request, response) {
  try {
    const orders = await Orders.findAll();
  return response.status(200).json(orders);
  }catch (error){
    return response.status(500).json(error)
  }
}

export default listOrdersController;
