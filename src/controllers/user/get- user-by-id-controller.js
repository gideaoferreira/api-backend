import User from "../../models/user.js"

async function getUserByIdController(request, response) {
    const userId = request.params.id
    const user = await User.findByPk (userId)

    return response.status(200).json(user)
}

export default getUserByIdController
