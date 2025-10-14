import User from "../../models/user.js";
import Orders from "../../models/orders.js";

async function listUsersController(request, response) {
  try {
    const users = await User.findAll({
      include: { model: Orders, as: "orders" },
    });
    response.status(200).json(users);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export default listUsersController;
