import User from "../../models/user.js";
import Orders from "../../models/orders.js";

async function listUsersController(request, response) {
    const users = await User.findAll({include: Orders})
    response.status(200).json(users)
}

export default listUsersController