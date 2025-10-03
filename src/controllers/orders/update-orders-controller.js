import Orders from "../../models/orders.js"

async function updateOrdersController(request, response) {
    const ordersId = request.params.id 
    const ordersData = request.body

    await Orders.update (
        {
            customer_id: ordersData.customer_id,
            store_id: ordersData.store_id

        },
        {
            where: {
                id: ordersId
            }
        }
    ) 
   return response.status(201).json({
        message: 'Pedido atualizado com sucesso!'
    })
}

export default updateOrdersController