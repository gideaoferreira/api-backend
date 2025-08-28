import User from "../../models/user.js";

async function deleteUserController(request, response) {
    const userId = request.params.id
    await User.destroy({
        where: {
            id: userId
        }
    })

    return response.status(201).json({
        message: "Usuário deletado com sucesso!"
    })
}

export default deleteUserController