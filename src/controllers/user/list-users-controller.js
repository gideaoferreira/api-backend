import User from "../../models/user.js";

async function listUsersController(request, response) {
    const users = await User.findAll()
    response.status(200).json(users)
}

export default listUsersController