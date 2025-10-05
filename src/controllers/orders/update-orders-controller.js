import Orders from "../../models/orders.js"

async function updateOrdersController(request, response) {
    try{
        const ordersId = request.params.id 
    const ordersData = request.body

    await Orders.update (
        {
            customer_id: ordersData.customer_id,
            product_id: ordersData.product_id

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
    }catch (error){
        return response.status(500).jason(error)
    }
  
}

export default updateOrdersController