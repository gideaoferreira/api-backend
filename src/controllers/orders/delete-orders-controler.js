import Orders from "../../models/orders.js";

async function deleteOdersController(request, response) {
  try{
    const ordersId = request.params.id;
  await Orders.destroy({
    where: {
      id: ordersId,
    },
  });
  return response.status(200).json(true);
  }catch (error){
    return response.status(500).json(error)
  }

  
}

export default deleteOdersController