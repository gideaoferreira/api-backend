import Orders from "../../models/orders.js";

async function deleteOdersController(request, response) {
  const ordersId = request.params.id;
  await Orders.destroy({
    where: {
      id: ordersId,
    },
  });

  return response.status(200).json(true);
}

export default deleteOdersController