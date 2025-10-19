import Orders from "../../models/orders.js";
import User from "../../models/user.js";
import Products from "../../models/products.js";

async function createOrdersController(request, response) {
  try {
    const { customer_id, product_id } = request.body;

    // Verifica se os campos vieram corretamente
    if (!customer_id || !product_id) {
      return response
        .status(400)
        .json({ error: "customer_id e product_id são obrigatórios." });
    }

    const order = await Orders.create({ customer_id, product_id });

    const orderWithRelations = await Orders.findByPk(order.id, {
      include: [
        { model: User, as: "user" },
        { model: Products, as: "product" },
      ],
    });

    return response.status(201).json(orderWithRelations);
  } catch (error) {
    console.error("Erro ao criar ordem:", error);
    return response.status(500).json({ error: error.message });
  }
}

export default createOrdersController;
