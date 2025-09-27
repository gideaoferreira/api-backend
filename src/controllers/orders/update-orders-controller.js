import Orders from "../../models/orders.js"

async function updateOrdersController(request, response) {
    const ordersId = request.params.id 
    const ordersdata = request.body

    await Orders.update (
        {
            id: ordersdata.id,
            client_id: ordersdata.client_id,
            store_id: ordersdata.store_id

        },
        {
            where: {
                id: ordersId
            }
        }
    ) 
   return response.status(201).json({
        message: 'Usário atualizado com sucesso!'
    })
}

export default updateOrdersController