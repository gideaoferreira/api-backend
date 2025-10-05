import User from "../../models/user.js"

async function getUserByIdController(request, response) {
    try{
            const userId = request.params.id
    const user = await User.findByPk (userId)

    return response.status(200).json(user)
    }catch(error){
    return response.status(500).json(error)
    }
}

export default getUserByIdController
