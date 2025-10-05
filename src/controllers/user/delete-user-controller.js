import User from "../../models/user.js";

async function deleteUserController(request, response) {
    try{
        const userId = request.params.id
    await User.destroy({
        where: {
            id: userId
        }
    })

    return response.status(201).json({
        message: "Usuário deletado com sucesso!"
    })
    }catch(error){
        return response.status(500).json(error)
    }
}

export default deleteUserController