import Orders from "../../models/orders.js";
import User from "../../models/user.js";
import Products from "../../models/products.js";

async function listOrdersController(req, res) {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: User,
          as: "user", // mesmo alias usado em associate
          attributes: ["id", "name", "surname"],
        },
        {
          model: Products,
          as: "product",
          attributes: ["id", "name", "price"],
        },
      ],
    });
    res.json(orders);
  } catch (error) {
    console.error("Erro ao listar ordens:", error);
    res.status(500).json({ error: "Erro ao listar ordens" });
  }
}

export default listOrdersController;
